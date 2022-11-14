import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Song} from '../../song.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from '@firebase/util';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  song:any={};
  songId:any;

  constructor(
    private firestoreService:FirestoreService,
    private route:ActivatedRoute,
    private alertController:AlertController,
    private router:Router
  ) { }

  ngOnInit() {
    this.songId = this.route.snapshot.paramMap.get('id');
    this.song = this.firestoreService.getSongDetail(this.songId).valueChanges();
  }

  async deleteSong(){
    const alert = await this.alertController.create({
      message:'Deseas eliminar esta canción?',
      buttons:[
        {
          text: 'Cancel', role: 'cancel', handler:blah => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',handler: () => {
            this.firestoreService.deleteSong(this.songId).then(
              () => {
                this.router.navigateByUrl('home');
              });
          },
        },
      ],
    });
    await alert.present();
  }

}
