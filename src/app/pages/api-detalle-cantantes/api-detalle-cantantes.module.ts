import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiDetalleCantantesPageRoutingModule } from './api-detalle-cantantes-routing.module';

import { ApiDetalleCantantesPage } from './api-detalle-cantantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiDetalleCantantesPageRoutingModule
  ],
  declarations: [ApiDetalleCantantesPage]
})
export class ApiDetalleCantantesPageModule {}
