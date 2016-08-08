import { Component } from '@angular/core';
import { NavController, Page, ViewController } from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
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

  submitForm: ControlGroup;
  emojiImage: AbstractControl;
  creatorName: AbstractControl;
  emojiName: AbstractControl;

  static get parameters() {
    return [ViewController]
  }

  constructor(private viewCtrl: ViewController, fb: FormBuilder) {

    this.submitForm = fb.group({
    'emojiName':['',Validators.compose([Validators.required, Validators.minLength(1)])],
    'creatorName':['', Validators.compose([Validators.required, Validators.minLength(1)])],
    'emojiImage': ['',Validators.compose([Validators.required])]
    });

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

}
