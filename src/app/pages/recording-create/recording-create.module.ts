import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { RecordingCreatePageRoutingModule } from './recording-create-routing.module';

import { RecordingCreatePage } from './recording-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordingCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RecordingCreatePage]
})
export class RecordingCreatePageModule {}
