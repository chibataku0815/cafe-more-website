import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  onView = new EventEmitter<number>();
  readFlg = false;
  constructor() { }

  ngOnInit() { }

  onIntersection({ visible }: { visible: boolean }) {
    if (this.readFlg || !visible) {
      return;
    }
    this.readFlg = true;
  }

}
