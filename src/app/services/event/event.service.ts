import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import {AuthService} from 'src/app/services/autenticacion/auth.service';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from "@angular/fire/compat/firestore";
import { FirebaseApp } from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    public angularFirestore:AngularFirestore,
    private authService:AuthService
  ) { }

  async createEvet(
    eventName:string,
    eventDate:string,
    eventPrice:number,
    eventCost:number
  ):Promise<DocumentReference>{
    const user: firebase.User = await this.authService.getUser();
    return this.angularFirestore.collection(`userProfile/${user.uid}/eventList`)
    .add({
      name:eventName,
      date:eventDate,
      price:eventPrice * 1,
      cost:eventCost * 1,
      revenue:eventCost * -1,
    });
  }

  getEventList(){
    const user: firebase.User = this.authService.getUser();
    const ref = this.angularFirestore.collection(`userProfile/${user.uid}/eventList`);
    return ref.valueChanges({idField:'id'});
  }

  getEventDetail(eventId:string):AngularFirestoreDocument{
    const user: firebase.User = this.authService.getUser();
    return this.angularFirestore.collection(`userProfile/${user.uid}/eventList`).doc(eventId);
  }

}
