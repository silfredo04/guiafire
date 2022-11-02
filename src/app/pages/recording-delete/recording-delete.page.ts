import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Recording} from '../../recording.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from '@firebase/util';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recording-delete',
  templateUrl: './recording-delete.page.html',
  styleUrls: ['./recording-delete.page.scss'],
})
export class RecordingDeletePage implements OnInit {
  Recording:any={};
  RecorId:any;

  constructor(
    private firestoreService:FirestoreService,
    private route:ActivatedRoute,
    private alertController:AlertController,
    private router:Router
  ) { }

  ngOnInit() {
    this.RecorId = this.route.snapshot.paramMap.get('id');
    this.Recording = this.firestoreService.getRecordingDetail(this.RecorId).valueChanges();
  }

  async deleteRecording(){
    const alert = await this.alertController.create({
      message:'Deseas eliminar este Recording?',
      buttons:[
        {
          text: 'Cancel', role: 'cancel', handler:blah => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',handler: () => {
            this.firestoreService.deleteRecording(this.RecorId).then(
              () => {
                this.router.navigateByUrl('recording-studios');
              });
          },
        },
      ],
    });
    await alert.present();
  }

}
