import {Component, ViewChild } from '@angular/core';
import {ModalController, NavController, NavParams, Slides} from 'ionic-angular';
import {EmojiDetailsPage} from '../emojis/emojis';
import { SubmitPage } from '../submit-page/submit-page';
import {emojiData} from '../../populate';
import {Emoji} from '../../models/emoji';
import {EmojiData} from '../../providers/emoji-data/emoji-data';

@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  selectedItem: any;
  images: Array<[{title: string, src: string}]>;
  rows: Array<number>;
  emojis = [];

  @ViewChild('mainSlider') slider: Slides;

  slideOptions = {
    initialSlide: 0,
    direction: 'vertical'
  };

  constructor (public navCtrl: NavController, private navParams: NavParams, public modalCtrl: ModalController, emojiData: EmojiData) {
    emojiData.getEmojis().then(emojis => {
      this.emojis = emojis;
    });
    this.rows = Array.from(Array(Math.ceil(this.emojis.length/2)).keys());
    console.log("rows:",this.rows);
    // console.log('hello',this.emojiData);

    // If we navigated to this page, we will have an item available as a nav param

    let index = 0;
    // for (let img of emojiData) {
    //   let e = new Emoji(img.title, img.src, img.category, img.detail_desc, img.short_desc);
    //   this.emojis[index] = e;
    //   index = index + 1;
    // }
    // this.selectedItem = navParams.get('image');
    // this.images = [];
    //
    // var emoji_count = this.emojis.length;
    // for (var i = 0; i<=5; i=i+1) {
    //   this.images.push([{
    //     title: this.emojis[i].title,
    //     src: this.emojis[i].src
    //   },
    //   {
    //     title: this.emojis[i+1].title,
    //     src: this.emojis[i+1].src
    //   }]);
    // }
    // console.log(this.images);
}
goToEmojiDetail(emoji) {
  this.navCtrl.push(EmojiDetailsPage, emoji);
}
  emojiTapped(event, emoji) {
    console.log('emoji data:', emoji);
    this.navCtrl.push(EmojiDetailsPage, {
      emoji: emoji
    });
  }
  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    console.log('current index:', currentIndex);
  }

  clickNextSlide() {
    this.slider.slideNext()
  }

  presentModal() {
    let modal = this.modalCtrl.create(SubmitPage);
    modal.present();
    }
  }
