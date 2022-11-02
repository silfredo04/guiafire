import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiDetalleCantantesPage } from './api-detalle-cantantes.page';

const routes: Routes = [
  {
    path: '',
    component: ApiDetalleCantantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiDetalleCantantesPageRoutingModule {}
