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
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:title', content: 'サンプル' },
      { name: 'og:description', content: 'これはサンプルです。' },
      { name: 'og:image', content: 'http://sample.com/sample.png' }
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

