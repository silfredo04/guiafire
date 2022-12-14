import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/autenticacion/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { UserI } from 'src/app/models/models';
import { FirestoreService } from '../../../services/data/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  datos:UserI = {
    uid:null,
    correo:null,
    password:null,
    perfil:'visitante'
  }
  resgisterForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder, 
    private authService:AuthService,
    private router:Router,
    private alertController:AlertController,
    private loadingCtrl:LoadingController,
    private firestoreService:FirestoreService
  ) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  async signupUser(event:Event):Promise<void>{
    event.preventDefault();
    if(this.resgisterForm.valid){
      let loader = this.loadingCtrl.create({
        message:"Registrando....."
      });
      (await loader).present();
      const value = this.resgisterForm.value;
      this.datos.correo = value.email;
      this.authService.signupUser(value.email,value.password).then(async (res) => {
        if(res){
          console.log("Exito al crear el usuario");
          const path = 'Perfil';
          const id = res.user.uid;
          this.datos.uid = id;
          await this.firestoreService.createDoc(this.datos,path,id);
          (await loader).dismiss();
          this.router.navigateByUrl('login');
        }
      }, async error => {
          const alert = await this.alertController.create({
            message: error.message, 
            buttons:[{text:'OK',role:'cancel'}],
          });
          await alert.present();
      });
    }
  }

  private buildForm(){
    this.resgisterForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength]]
    });
  }

  get emailField() {return this.resgisterForm.get('email')}
  get passField() {return this.resgisterForm.get('password')}

}
