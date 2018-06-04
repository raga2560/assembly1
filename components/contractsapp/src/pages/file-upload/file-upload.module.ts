import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileUploadPage } from './file-upload';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [
    FileUploadPage,
    FileSelectDirective
  ],
  imports: [

    IonicPageModule.forChild(FileUploadPage),
  ],
   exports: [
    FileUploadPage
  ],
})
export class FileUploadPageModule {}
