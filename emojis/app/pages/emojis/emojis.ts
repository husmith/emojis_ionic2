import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';
/*
  Generated class for the EmojisPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/emojis/emojis.html',
})
export class EmojiDetailsPage {
  selectedEmoji: any;
  constructor(private navCtrl: NavController, navParams: NavParams) {
    this.selectedEmoji = navParams.get('emoji');
  }

  shareEmoji(event, emoji) {
    var message = emoji.title;
    var img = emoji.src;
    var url = "#";

      SocialSharing.shareViaTwitter(message, img, url);

      SocialSharing.shareViaFacebook(message, img, url);

      SocialSharing.shareViaInstagram(message, img);

  }

}
