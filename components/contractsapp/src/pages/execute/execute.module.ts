import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExecutePage } from './execute';

@NgModule({
  declarations: [
    ExecutePage,
  ],
  imports: [
    IonicPageModule.forChild(ExecutePage),
  ],
})
export class ExecutePageModule {}
