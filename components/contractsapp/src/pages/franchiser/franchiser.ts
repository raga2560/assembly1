import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the FranchiserPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-franchiser',
  templateUrl: 'franchiser.html'
})
export class FranchiserPage {

  clientsRoot = 'ClientsPage'
  settingsRoot = 'SettingsPage'
  accountsRoot = 'AccountsPage'


  constructor(public navCtrl: NavController) {}

}
