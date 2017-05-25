import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendencePage } from './attendence';

@NgModule({
  declarations: [
    AttendencePage,
  ],
  imports: [
    IonicPageModule.forChild(AttendencePage),
  ],
  exports: [
    AttendencePage
  ]
})
export class AttendenceModule {}
