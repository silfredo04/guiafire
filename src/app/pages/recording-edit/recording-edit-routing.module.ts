import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordingEditPage } from './recording-edit.page';

const routes: Routes = [
  {
    path: '',
    component: RecordingEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordingEditPageRoutingModule {}
