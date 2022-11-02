import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiCantantesPageRoutingModule } from './api-cantantes-routing.module';

import { ApiCantantesPage } from './api-cantantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiCantantesPageRoutingModule
  ],
  declarations: [ApiCantantesPage]
})
export class ApiCantantesPageModule {}
