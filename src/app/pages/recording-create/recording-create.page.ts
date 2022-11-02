import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'
import{LoadingController,AlertController} from '@ionic/angular'
import {FirestoreService} from '../../services/data/firestore.service'
import{Router} from '@angular/router'

@Component({
  selector: 'app-recording-create',
  templateUrl: './recording-create.page.html',
  styleUrls: ['./recording-create.page.scss'],
})
export class RecordingCreatePage implements OnInit {
  public createRecordingForm:any;


  constructor(
    public loadingCtrl:LoadingController,
    public alertCtrl:AlertController,
    public firestoreService:FirestoreService,
    public formBuilder:FormBuilder,
    public router:Router
  ) {
    this.createRecordingForm = formBuilder.group({
      nameRedording:['',Validators.required],
      type_of_melody:['',Validators.required],
      number_of_cabins:['',Validators.required],
      Owner:['',Validators.required],
    });
   }

  ngOnInit() {
  }

  async createRecording(){
    const loading = await this.loadingCtrl.create({
      message: "Add Recording..."
    });
    const nameRedording = this.createRecordingForm.value.nameRedording;
    const type_of_melody = this.createRecordingForm.value.type_of_melody;
    const number_of_cabins = this.createRecordingForm.value.number_of_cabins;
    const Owner = this.createRecordingForm.value.Owner;
    this.firestoreService.createRecording(nameRedording,type_of_melody,number_of_cabins,Owner).then(
      () =>{
        loading.dismiss().then(
          () =>{
            this.router.navigateByUrl('recording-studios');
          }
        );
      },
      error => {
        console.error(error);
      }
    );
    return await loading.present();
  }

}
