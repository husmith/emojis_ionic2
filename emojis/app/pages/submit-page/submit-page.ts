import { Component } from '@angular/core';
import { NavController, Page, ViewController } from 'ionic-angular';
import { Validators} from '@angular/common';
import {FORM_DIRECTIVES, FormBuilder,  FormGroup, AbstractControl} from '@angular/forms';
import {Camera} from 'ionic-native';
/*
  Generated class for the SubmitPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/submit-page/submit-page.html',
  directives: [FORM_DIRECTIVES]
})
export class SubmitPage {
  public base64Image: string;
  submitForm: FormGroup;
  emojiImage: AbstractControl;
  creatorName: AbstractControl;
  emojiName: AbstractControl;

  static get parameters() {
    return [ViewController, FormBuilder];
  }

  constructor(private viewCtrl: ViewController, fb: FormBuilder) {
    if (fb) {
      this.submitForm = fb.group({
      'emojiName':['',Validators.compose([Validators.required, Validators.minLength(1)])],
      'creatorName':['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'emojiImage': ['',Validators.compose([Validators.required])]
      });

    }

    this.emojiName = this.submitForm.controls['emojiName'];
    this.emojiImage = this.submitForm.controls['emojiImage'];
    this.creatorName = this.submitForm.controls['creatorName'];
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

  onSubmit(value: string): void {
    if (this.submitForm.valid) {
      console.log('Submit info: ', value);
    }
  }

  takePicture(){
      Camera.getPicture({
          destinationType: Camera.DestinationType.DATA_URL,
          targetWidth: 1000,
          targetHeight: 1000
      }).then((imageData) => {
        // imageData is a base64 encoded string
          this.base64Image = "data:image/jpeg;base64," + imageData;
      }, (err) => {
          console.log(err);
      });
    }
}
