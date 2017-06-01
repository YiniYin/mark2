import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PunchCardPage } from './punch-card';

@NgModule({
  declarations: [
    PunchCardPage,
  ],
  imports: [
    IonicPageModule.forChild(PunchCardPage),
  ],
  exports: [
    PunchCardPage
  ]
})
export class PunchCardModule {}
