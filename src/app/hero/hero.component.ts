import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  onView = new EventEmitter<number>();
  readFlg = false;

  constructor() { }

  ngOnInit() {
  }

  onIntersection({ visible }: { visible: boolean }) {
    if (this.readFlg || !visible) {
      return;
    }
    this.readFlg = true;
  }

}
