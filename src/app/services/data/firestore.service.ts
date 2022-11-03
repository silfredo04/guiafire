import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Song} from '../../song.interface'
import {Recording} from '../../recording.interface'
import { Galeria } from "../../galeria.interface";


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

  createRecording(nameRedording:string, type_of_melody:string ,number_of_cabins:string ,Owner:string): Promise<void>{
    const id = this.angularFirestore.createId();
    return this.angularFirestore.doc(`listaRecording/${id}`).set({
      id,
      nameRedording,
      type_of_melody,
      number_of_cabins,
      Owner,
    });
  }

  getSongList():AngularFirestoreCollection<Song>{
    return this.angularFirestore.collection(`listaCanciones`);
  }

  getRecordingList():AngularFirestoreCollection<Recording>{
    return this.angularFirestore.collection(`listaRecording`);
  }

  getGaleriaList():AngularFirestoreCollection<Galeria>{
    return this.angularFirestore.collection(`ListaGaleria`);
  }

  getSongDetail(songId:string):AngularFirestoreDocument<Song>{
    return this.angularFirestore.collection(`listaCanciones`).doc(songId);
  }

  getGaleriaDetail(GaleriaId:string):any{
    // return this.angularFirestore.collection(`ListaGaleria`).doc(GaleriaId);
    /* const collection = this.angularFirestore.collection('ListaGaleria');
    return collection.doc(GaleriaId).valueChanges(); */
    const result = this.angularFirestore.collection('ListaGaleria', ref => ref.where('id', '==', parseInt(GaleriaId)));
    return result.valueChanges();
  }

  getRecordingDetail(RecordId:string):AngularFirestoreDocument<Recording>{
    return this.angularFirestore.collection(`listaRecording`).doc(RecordId);
  }

  deleteSong(songId:string): Promise<void>{
    return this.angularFirestore.doc(`listaCanciones/${songId}`).delete();
  }

  deleteRecording(RecordId:string): Promise<void>{
    return this.angularFirestore.doc(`listaRecording/${RecordId}`).delete();
  }

  
}
