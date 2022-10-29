import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Song} from '../../song.interface'



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public angularFirestore:AngularFirestore
  ) { }

  createSong(albumName:string, artisName:string ,songDescription:string ,songName:string): Promise<void>{
    const id = this.angularFirestore.createId();
    return this.angularFirestore.doc(`listaCanciones/${id}`).set({
      id,
      albumName,
      artisName,
      songDescription,
      songName,
    });
  }

  getSongList():AngularFirestoreCollection<Song>{
    return this.angularFirestore.collection(`listaCanciones`);
  }

  getSongDetail(songId:string):AngularFirestoreDocument<Song>{
    return this.angularFirestore.collection(`listaCanciones`).doc(songId);
  }

  deleteSong(songId:string): Promise<void>{
    return this.angularFirestore.doc(`listaCanciones/${songId}`).delete();
  }
}
