import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


/*
Generated class for the EmojiData provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()

export class EmojiData {
  data: any;

  constructor(private http: Http) {}

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('data/data.json').subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = this.processData(res.json());
        resolve(this.data);
      });
    });
  }
  processData(data) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions

    data.tracks = [];


    // loop through each day in the schedule
    data.emojis.forEach(emoji => {
      data.tracks.push(emoji)
    });

    return data;
  }

  getEmojis() {
    return this.load().then(data=> {
      return data.tracks;
    });
  }

  setData(data) {
    return this.data = data;
  }
}
