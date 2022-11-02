import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiGaleriaPageRoutingModule } from './api-galeria-routing.module';

import { ApiGaleriaPage } from './api-galeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiGaleriaPageRoutingModule
  ],
  declarations: [ApiGaleriaPage]
})
export class ApiGaleriaPageModule {}
