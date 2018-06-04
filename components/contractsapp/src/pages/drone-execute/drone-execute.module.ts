import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DroneExecutePage } from './drone-execute';

@NgModule({
  declarations: [
    DroneExecutePage,
  ],
  imports: [
    IonicPageModule.forChild(DroneExecutePage),
  ],
  exports: [
    DroneExecutePage,
  ],
})
export class DroneExecutePageModule {}
