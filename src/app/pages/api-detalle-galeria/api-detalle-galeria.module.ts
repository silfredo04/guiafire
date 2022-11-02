import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiDetalleGaleriaPageRoutingModule } from './api-detalle-galeria-routing.module';

import { ApiDetalleGaleriaPage } from './api-detalle-galeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiDetalleGaleriaPageRoutingModule
  ],
  declarations: [ApiDetalleGaleriaPage]
})
export class ApiDetalleGaleriaPageModule {}
