import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordingDetailPage } from './recording-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RecordingDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordingDetailPageRoutingModule {}
