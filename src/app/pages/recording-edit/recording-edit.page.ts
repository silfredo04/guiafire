import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Recording} from '../../recording.interface';
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
  selector: 'app-recording-edit',
  templateUrl: './recording-edit.page.html',
  styleUrls: ['./recording-edit.page.scss'],
})
export class RecordingEditPage implements OnInit {

  recording = {} as Recording;
  recorId:any;

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
    this.recorId = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.getRecordingById(this.recorId);
  }

  async getRecordingById(id: string) {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    this.angularFirestore
      .doc("listaRecording/" + id)
      .valueChanges()
      .subscribe(data => {
        this.recording.nameRedording = data["nameRedording"];
        this.recording.type_of_melody = data["type_of_melody"];
        this.recording.number_of_cabins = data["number_of_cabins"];
        this.recording.Owner = data["Owner"];

        // dismiss loader
        loader.dismiss();
      });
  }

  async updateRecording(recording: Recording) {
    if (this.formValidation()) {
      // console.log("ready to submit");

      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Actualizando datos..."
      });
      loader.present();

      try {
        await this.angularFirestore.doc("listaRecording/" + this.recorId).update(recording);
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
    if (!this.recording.nameRedording) {
      // show toast message
      this.showToast("Ingrese nameRedording");
      return false;
    }

    if (!this.recording.type_of_melody) {
      // show toast message
      this.showToast("Ingrese type_of_melody");
      return false;
    }

    if (!this.recording.number_of_cabins) {
      // show toast message
      this.showToast("Ingrese number_of_cabins");
      return false;
    }

    if (!this.recording.Owner) {
      // show toast message
      this.showToast("Ingrese Owner");
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
