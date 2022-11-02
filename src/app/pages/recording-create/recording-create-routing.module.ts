import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordingCreatePage } from './recording-create.page';

const routes: Routes = [
  {
    path: '',
    component: RecordingCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordingCreatePageRoutingModule {}
