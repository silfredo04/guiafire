import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { ReactiveFormsModule} from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
