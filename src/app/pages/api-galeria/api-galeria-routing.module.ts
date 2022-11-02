import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiGaleriaPage } from './api-galeria.page';

const routes: Routes = [
  {
    path: '',
    component: ApiGaleriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiGaleriaPageRoutingModule {}
