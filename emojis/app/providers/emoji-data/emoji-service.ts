export class EmojiService {

    title: string;
    src: string;
    category: string;
    detail_desc: string;
    short_desc: string;
    location: string;

    constructor() {
      this.title = '';
      this.src = '';
      this.category = 'none';
      this.detail_desc = '';
      this.short_desc = '';
      this.location = '';
    }

    getImage(title) {
      return this.src;
    }

}
