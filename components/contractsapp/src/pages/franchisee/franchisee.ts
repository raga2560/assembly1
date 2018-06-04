import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the FranchiseePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-franchisee',
  templateUrl: 'franchisee.html'
})
export class FranchiseePage {

  tradeRoot = 'TradePage'
  accountRoot = 'AccountPage'
  salesRoot = 'SalesPage'


  constructor(public navCtrl: NavController) {}

}
