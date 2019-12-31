import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import * as WebFont from 'webfontloader';
import { environment } from '@env/environment';

console.log('test in');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'cafe-more-websaite';

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
    ]);
    WebFont.load({
      custom: {
        families: [
          'Noto Sans JP',
          'Oswald'
        ],
        urls: [
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP',
          'https://fonts.googleapis.com/css?family=Oswald&display=swap'
        ]
      }
    });
  }
}

console.log(environment);

