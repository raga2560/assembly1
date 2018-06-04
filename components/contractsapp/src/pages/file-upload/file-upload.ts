import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileUploader } from 'ng2-file-upload';


/**
 * Generated class for the FileUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file-upload',
  templateUrl: 'file-upload.html',
})
export class FileUploadPage {

captureDataUrl: string;
  myobj : any;
 
  //native image upload
  imageURI:any;
imageFileName:any;
 
//native image download
 storageDirectory: string = '';
  
  // standard uploader
  public uploader:FileUploader = new FileUploader({
                url:'http://localhost:8081/imageupload',
                allowedFileType: ["pdf"],
                maxFileSize: 1*1024*1024
   });

   public imageuploader:FileUploader = new FileUploader({
                url:'http://localhost:8081/imageupload',
                allowedFileType: ["pdf"],
                maxFileSize: 1*1024*1024
   });




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileUploadPage');
  }



}
