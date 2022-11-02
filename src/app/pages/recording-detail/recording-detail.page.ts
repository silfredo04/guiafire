import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Recording} from '../../recording.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from '@firebase/util';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recording-detail',
  templateUrl: './recording-detail.page.html',
  styleUrls: ['./recording-detail.page.scss'],
})
export class RecordingDetailPage implements OnInit {

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

}
