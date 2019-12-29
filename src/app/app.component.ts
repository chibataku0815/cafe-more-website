import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cafe-more-websaite';

  constructor(private meta: Meta) { }

  ngOnInit() {
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:title', content: 'サンプル' },
      { name: 'og:description', content: 'これはサンプルです。' },
      { name: 'og:image', content: 'http://sample.com/sample.png' }
    ]);
  }
}
