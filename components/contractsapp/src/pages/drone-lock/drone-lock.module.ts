import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DroneLockPage } from './drone-lock';

@NgModule({
  declarations: [
    DroneLockPage,
  ],
  imports: [
    IonicPageModule.forChild(DroneLockPage),
  ],
  exports: [
    DroneLockPage,
  ],
})
export class DroneLockPageModule {}
