import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordingDeletePage } from './recording-delete.page';

const routes: Routes = [
  {
    path: '',
    component: RecordingDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordingDeletePageRoutingModule {}
