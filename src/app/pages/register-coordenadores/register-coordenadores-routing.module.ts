import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCoordenadoresPage } from './register-coordenadores.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterCoordenadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterCoordenadoresPageRoutingModule {}
