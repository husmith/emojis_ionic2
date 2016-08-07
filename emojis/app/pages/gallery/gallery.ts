import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EmojiDetailsPage} from '../emojis/emojis';


@Component({
  templateUrl: 'build/pages/gallery/gallery.html'
})
export class GalleryPage {
  selectedItem: any;
  images: Array<[{title: number, src: string}]>;
  icons: string[];

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('image');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

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
    this.navCtrl.push(EmojiDetailsPage, {
      item: image
    });
  }
}
