import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/autenticacion/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { async } from '@firebase/util';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  recoverForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder, 
    private authService:AuthService,
    private router:Router,
    private alertController:AlertController
  ) { 
    this.buildForm();
  }

  resetPassword(event:Event):void{
    event.preventDefault();
    if(this.recoverForm.valid){
      const value = this.recoverForm.value;
      this.authService.rpassword(value.email).then( 
        async () => {
          const alert = await this.alertController.create({
            message:"Revisa tu correo que te enviamos el link para que cambies tu contraseña...",
            buttons:[{text:'OK', role:'cancel', handler: () =>{
              this.router.navigateByUrl('login');
            },},],});
          await alert.present(); 
        },
          async error =>{
            const ErrorAlert = await this.alertController.create({
              message: error.message,
              buttons:[{text:'OK', role:'cancel'}],
            });
            await ErrorAlert.present(); 
          });
    }
  }

  ngOnInit() {
  }

  private buildForm(){
    this.recoverForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
    });
  }

  get emailField() {return this.recoverForm.get('email')}
}
