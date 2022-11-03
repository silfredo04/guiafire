import { Component, OnInit } from '@angular/core';
import {GaleriaService} from 'src/app/pages/galeria.service'
import{Observable}from "rxjs";
import{ActivatedRoute} from '@angular/router';
import { Galeria } from "../../galeria.interface";
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { FirestoreService } from '../../services/data/firestore.service';


@Component({
  selector: 'app-api-detalle-galeria',
  templateUrl: './api-detalle-galeria.page.html',
  styleUrls: ['./api-detalle-galeria.page.scss'],
})
export class ApiDetalleGaleriaPage implements OnInit {
  informacion:any={};
  cargando: boolean = true;
  GaleriaList:any;
  Id:any;
  constructor(
    private galeriaService:GaleriaService, 
    private activatedRoute:ActivatedRoute,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController,
    private firestoreService:FirestoreService
    ) { }

  ngOnInit() {
    this.Id= this.activatedRoute.snapshot.paramMap.get('id');
    this.firestoreService.getGaleriaDetail(this.Id).subscribe((res:any) => {
      this.GaleriaList = res
    });
    this.galeriaService.getGaleriaDetalles(this.Id).subscribe(res => {
      this.informacion = res;
      this.cargando = false;
    });
  }

  async createGaleria(informacion: Galeria) {
    if (this.formValidation()) {
      if(this.GaleriaList.length > 0){
        this.showToast("No se admiten fotos duplicadas");
      }else{
        let loader = await this.loadingCtrl.create({
          message: "Creando Imagen..."
        });
        loader.present();
  
        try {
          await this.firestore.collection("ListaGaleria").add(informacion);
        } catch (e) {
          this.showToast(e);
        }
  
        // dismiss loader
        loader.dismiss();
  
        // redirect to home page
        this.navCtrl.navigateRoot("api-galeria");
      }
      // show loader 
    }
  }

  formValidation() {
    if (!this.informacion.title) {
      // show toast message
      this.showToast("Por favor ingresa un  title");
      return false;
    }

    return true;
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000
      })
      .then(toastData => toastData.present());
  }

}
