import { Component, OnInit } from '@angular/core';
import {GaleriaService} from 'src/app/pages/galeria.service'
import{Observable}from "rxjs";
import{ActivatedRoute} from '@angular/router';
import { Recording } from "../../recording.interface";
import {
  ToastController,
  LoadingController,
  NavController
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-api-detalle-galeria',
  templateUrl: './api-detalle-galeria.page.html',
  styleUrls: ['./api-detalle-galeria.page.scss'],
})
export class ApiDetalleGaleriaPage implements OnInit {
  informacion:any={};
  cargando: boolean = true;
  constructor(
    private galeriaService:GaleriaService, 
    private activatedRoute:ActivatedRoute,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    let id= this.activatedRoute.snapshot.paramMap.get('id');
    this.galeriaService.getGaleriaDetalles(id).subscribe(res => {
      this.informacion = res;
      this.cargando = false;
    });
  }

  async createGaleria(informacion: Recording) {
    // console.log(post);

    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
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
