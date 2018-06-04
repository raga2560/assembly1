import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FranchiseePage } from './franchisee';

@NgModule({
  declarations: [
    FranchiseePage,
  ],
  imports: [
    IonicPageModule.forChild(FranchiseePage),
  ]
})
export class FranchiseePageModule {}
