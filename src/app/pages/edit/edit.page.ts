import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Song} from '../../song.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from '@firebase/util';
import { AlertController } from '@ionic/angular';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'
import { AngularFirestore } from "@angular/fire/compat/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  song = {} as Song;
  songId:any;
  

  constructor(
    private firestoreService:FirestoreService,
    private route:ActivatedRoute,
    private alertController:AlertController,
    private router:Router,
    public formBuilder:FormBuilder,
    public angularFirestore:AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { 
    this.songId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getPostById(this.songId);
  }

  async getPostById(id: string) {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    this.angularFirestore
      .doc("listaCanciones/" + id)
      .valueChanges()
      .subscribe(data => {
        this.song.albumName = data["albumName"];
        this.song.artisName = data["artisName"];
        this.song.songDescription = data["songDescription"];
        this.song.songName = data["songName"];

        // dismiss loader
        loader.dismiss();
      });
  }

  async updateSong(song: Song) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Actualizando datos..."
      });
      loader.present();

      try {
        await this.angularFirestore.doc("listaCanciones/" + this.songId).update(song);
      } catch (e) {
        this.showToast(e);
      }

      // dismiss loader
      await loader.dismiss();

      // redirect to home page
      this.navCtrl.navigateRoot("home");
    }
  }

  formValidation() {
    if (!this.song.albumName) {
      // show toast message
      this.showToast("Ingrese albumName");
      return false;
    }

    if (!this.song.artisName) {
      // show toast message
      this.showToast("Ingrese artisName");
      return false;
    }

    if (!this.song.songDescription) {
      // show toast message
      this.showToast("Ingrese songDescription");
      return false;
    }

    if (!this.song.songName) {
      // show toast message
      this.showToast("Ingrese songName");
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
