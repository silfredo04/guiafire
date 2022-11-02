import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordingEditPageRoutingModule } from './recording-edit-routing.module';

import { RecordingEditPage } from './recording-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordingEditPageRoutingModule
  ],
  declarations: [RecordingEditPage]
})
export class RecordingEditPageModule {}
