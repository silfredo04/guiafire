import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  // INICIAR SESIÓN
  loginUser( email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password); 
  }

  //  función de registro
  signupUser(email: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
   }


   // restablecer sus contraseñas
   rpassword(email:string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }


  // función de cierre de sesión
  logoutUser():Promise<void> {
    return firebase.auth().signOut();
  }

  // esta funcion optiene datos de un usuario  de una base de datos
  getUser(): any { 
    return firebase.auth().currentUser;
  }

  // optiene el estado de autenticacion del usuario
  stateUser(){
    return firebase.auth().onAuthStateChanged;
  }

}
