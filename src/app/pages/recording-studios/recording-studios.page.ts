import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Recording} from '../../recording.interface';
import { FirestoreService } from '../../services/data/firestore.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recording-studios',
  templateUrl: './recording-studios.page.html',
  styleUrls: ['./recording-studios.page.scss'],
})
export class RecordingStudiosPage implements OnInit {
  RecordingList:any = [];
  constructor(
    private firestoreService:FirestoreService,
    private router:Router,
    private alertController:AlertController
  ) { }

  ngOnInit() {
    this.RecordingList = this.firestoreService.getRecordingList().valueChanges();
  }

}
