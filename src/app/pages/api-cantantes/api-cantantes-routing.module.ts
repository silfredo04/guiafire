import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiCantantesPage } from './api-cantantes.page';

const routes: Routes = [
  {
    path: '',
    component: ApiCantantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiCantantesPageRoutingModule {}
