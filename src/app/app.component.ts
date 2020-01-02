import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from '@env/environment';

console.log('test in');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'cafe-more-website';

  constructor(private meta: Meta) { }

  debug(): void {
    const chiba = window;
    console.log(chiba);
  }

  ngOnInit() {
    this.meta.addTags([
      {
        name: 'title',
        content: 'キッチンカー（移動販売車）| Food Truck Cafe more カフェモア'
      },
      {
        name: 'description',
        content: 'キッチンカー（移動販売車）東京・埼玉・千葉・関東で出店・ケータリング！天然酵母パンを使用したオリジナルホットドッグ！無添加ソーセージを使用したオーガニックドッグや旬に応じたデイリーメニューなど豊富に提供しております'
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Food Truck Cafe more カフェモアfirebase' },
      { name: 'og:description', content: 'キッチンカー（移動販売車）東京・埼玉・千葉・関東で出店・ケータリング！天然酵母パンを使用したオリジナルホットドッグ！無添加ソーセージを使用したオーガニックドッグや旬に応じたデイリーメニューなど豊富に提供しております' },
      { name: 'og:image', content: 'https://cafe-more.jp/assets/images/ogp.jpg' },
      { name: 'og:image', content: '/assets/images/ogp.jpg' },
      { name: 'twitter:card', content: 'summary' }
    ]);
  }
}

console.log(environment);

