import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterCoordenadoresPageRoutingModule } from './register-coordenadores-routing.module';

import { RegisterCoordenadoresPage } from './register-coordenadores.page';
import { ReactiveFormsModule} from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterCoordenadoresPageRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  declarations: [RegisterCoordenadoresPage]
})
export class RegisterCoordenadoresPageModule {}
