import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DroneLockPage } from '../pages/drone-lock/drone-lock';
import { DroneExecutePage } from '../pages/drone-execute/drone-execute';
import { FileUploadPage } from '../pages/file-upload/file-upload';
import { CouponIssuePage } from '../pages/coupon-issue/coupon-issue';
import { NoteCouponIssuePage } from '../pages/notecoupon-issue/notecoupon-issue';
import { CouponRedeemPage } from '../pages/coupon-redeem/coupon-redeem';
import { FranchiserPage } from '../pages/franchiser/franchiser';
import { FranchiseePage } from '../pages/franchisee/franchisee';
import { DealMakerPage } from '../pages/deal-maker/deal-maker';
import { DealClientsPage } from '../pages/deal-clients/deal-clients';
import { WalletRPage } from '../pages/wallet-r/wallet-r';
import { WalletRadminPage } from '../pages/wallet-radmin/wallet-radmin';
import { WalletSPage } from '../pages/wallet-s/wallet-s';
import { WalletSadminPage } from '../pages/wallet-sadmin/wallet-sadmin';
import { NoteCouponRedeemPage } from '../pages/notecoupon-redeem/notecoupon-redeem';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Fileupload', component: FileUploadPage, icon: 'contact' },
      { title: 'Divider', component: '' , icon: 'none' },
      { title: 'DroneLock', component: DroneLockPage, icon: 'contact' },
      { title: 'DroneUnLock', component:DroneExecutePage , icon: 'contact' },
      { title: 'Divider', component: '', icon: 'none' },
      { title: 'CouponIssue', component: CouponIssuePage, icon: 'contact' },
      { title: 'CouponRedeem', component: CouponRedeemPage, icon: 'contact' },
      { title: 'Divider', component: '', icon: 'none' },
      { title: 'NoteCouponIssue', component: NoteCouponIssuePage, icon: 'contact' },
      { title: 'NoteCouponRedeem', component: NoteCouponRedeemPage, icon: 'contact' },
      { title: 'Divider', component: '', icon: 'none' },
      { title: 'Wallet Regular', component: WalletRPage, icon: 'contact' },
      { title: 'Wallet Admin Regular', component: WalletRadminPage, icon: 'contact' },
      { title: 'Divider', component: '', icon: 'none' },
      { title: 'Wallet AML', component: WalletSPage, icon: 'contact' },
      { title: 'Wallet Admin AML', component: WalletSadminPage, icon: 'contact' },
      { title: 'Divider', component: '', icon: 'none' },
      { title: 'Franchiser ', component: FranchiserPage, icon: 'contact' },
      { title: 'Franchisee ', component: FranchiseePage, icon: 'contact' },
      { title: 'Divider', component: '', icon: 'none' },
      { title: 'DealMaker ', component: DealMakerPage, icon: 'contact' },
      { title: 'DealClients ', component: DealClientsPage, icon: 'contact' },
      { title: 'Divider', component: '', icon: 'none' },
      { title: 'List', component: ListPage, icon: 'contact' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
