import {Component, ViewChild } from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import {EmojiDetailsPage} from '../emojis/emojis';

@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  selectedItem: any;
  images: Array<[{title: number, src: string}]>;

  @ViewChild('mainSlider') slider: Slides;

  slideOptions = {
    initialSlide: 0,
    direction: 'vertical'
  };
  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('image');
    this.images = [];
    for (let i = 0; i<=10; i=i+2) {
              this.images.push([{
                title: i,
                src: 'http://placehold.it/50x50'
              },
              {
                title: i+1,
                src: 'http://placehold.it/50x50'
              }]);
    }

  }

  imageTapped(event, image) {
    console.log('image data:', image);
    this.navCtrl.push(EmojiDetailsPage, {
      image: image
    });
  }
  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    console.log('current index:', currentIndex);
  }

  clickNextSlide() {
    this.slider.slideNext()
  }

  openSubmit() {

  }
}
