import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiDetalleGaleriaPage } from './api-detalle-galeria.page';

const routes: Routes = [
  {
    path: '',
    component: ApiDetalleGaleriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiDetalleGaleriaPageRoutingModule {}
