export class Emoji {

  public title: string;
  public src: string;
  public category: string;
  public detail_desc: string;
  public short_desc: string;

  constructor(title: string, src: string, cat: string, d_d: string, s_d: string ) {
    this.title = title;
    this.src = src;
    this.category = cat;
    this.detail_desc = d_d;
    this.short_desc = s_d;
  }

}
