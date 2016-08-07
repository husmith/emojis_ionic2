import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

/*
  Generated class for the EmojisPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/emojis/emojis.html',
})
export class EmojiDetailsPage {
  selectedItem: any;
  constructor(private navCtrl: NavController, navParams: NavParams) {
    this.selectedItem = navParams.get('image');
  }

}
