import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { ListPageModule } from '../pages/list/list.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FileUploadPageModule } from '../pages/file-upload/file-upload.module';
import { DroneLockPageModule } from '../pages/drone-lock/drone-lock.module';
import { DroneExecutePageModule } from '../pages/drone-execute/drone-execute.module';
import { CouponIssuePageModule } from '../pages/coupon-issue/coupon-issue.module';
import { CouponRedeemPageModule } from '../pages/coupon-redeem/coupon-redeem.module';
import { NoteCouponIssuePageModule } from '../pages/notecoupon-issue/notecoupon-issue.module';
import { NoteCouponRedeemPageModule } from '../pages/notecoupon-redeem/notecoupon-redeem.module';
import { DealMakerPageModule } from '../pages/deal-maker/deal-maker.module';
import { DealClientsPageModule } from '../pages/deal-clients/deal-clients.module';
import { FranchiserPageModule } from '../pages/franchiser/franchiser.module';
import { FranchiseePageModule } from '../pages/franchisee/franchisee.module';
import { WalletRPageModule } from '../pages/wallet-r/wallet-r.module';
import { WalletSPageModule } from '../pages/wallet-s/wallet-s.module';
import { WalletRadminPageModule } from '../pages/wallet-radmin/wallet-radmin.module';
import { WalletSadminPageModule } from '../pages/wallet-sadmin/wallet-sadmin.module';
//import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [
    MyApp,
//    HomePage,
//   FileUploadPage,
//    FileSelectDirective
//    ListPage
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    ListPageModule,
    FileUploadPageModule,
    DealMakerPageModule,
    DealClientsPageModule,
    FranchiserPageModule,
    FranchiseePageModule,
    DroneLockPageModule,
    CouponIssuePageModule,
    CouponRedeemPageModule,
    NoteCouponIssuePageModule,
    NoteCouponRedeemPageModule,
    DroneExecutePageModule,
    WalletRPageModule,
    WalletRadminPageModule,
    WalletSPageModule,
    WalletSadminPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
//    HomePage
//    FileUploadPage,
//    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
