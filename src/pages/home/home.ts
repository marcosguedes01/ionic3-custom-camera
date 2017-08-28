import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview';

/**
 * Fonte: https://ionicframework.com/docs/native/camera-preview/
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public picture:string;

  constructor(
    public navCtrl: NavController,
    private cameraPreview: CameraPreview) {

      this.startCamera();
  }

  takePicture(){
    // take a picture
    this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.picture = 'assets/img/test.jpg';
    });
  }

  switchCamera()
  {
    // Switch camera
    this.cameraPreview.switchCamera();
  }

  startCamera()
  {
    // start camera
    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });
    
      // set color effect to negative
      this.cameraPreview.setColorEffect('negative');
  }

  stopCamera()
  {
    // Stop the camera preview
    this.cameraPreview.stopCamera();
  }

  // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
  private cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1
  };

  // picture options
  private pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 85
  }

}
