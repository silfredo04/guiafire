import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/autenticacion/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register-coordenadores',
  templateUrl: './register-coordenadores.page.html',
  styleUrls: ['./register-coordenadores.page.scss'],
})
export class RegisterCoordenadoresPage implements OnInit {
  resgisterForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private authService:AuthService,
    private router:Router,
    private alertController:AlertController,
    private loadingCtrl:LoadingController,
  ) {
    this.buildForm();
   }

  ngOnInit() {
  }

  /* async signupUser(event:Event):Promise<void>{
    event.preventDefault();
    if(this.resgisterForm.valid){
      let loader = this.loadingCtrl.create({
        message:"Registrando....."
      });
      (await loader).present();
      const value = this.resgisterForm.value;
      this.authService.signupUser(value.email,value.password,value.perfil).then(async () => {
        (await loader).dismiss();
        this.router.navigateByUrl('login');
      }, async error => {
          const alert = await this.alertController.create({
            message: error.message, 
            buttons:[{text:'OK',role:'cancel'}],
          });
          await alert.present();
      });
    }
  } */

  private buildForm(){
    this.resgisterForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength]],
      perfil: ['',[Validators.required,Validators.minLength]]
    });
  }

  get emailField() {return this.resgisterForm.get('email')}
  get passField() {return this.resgisterForm.get('password')}
  get perfilField() {return this.resgisterForm.get('perfil')}

}
