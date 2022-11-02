import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordingDeletePageRoutingModule } from './recording-delete-routing.module';

import { RecordingDeletePage } from './recording-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordingDeletePageRoutingModule
  ],
  declarations: [RecordingDeletePage]
})
export class RecordingDeletePageModule {}
