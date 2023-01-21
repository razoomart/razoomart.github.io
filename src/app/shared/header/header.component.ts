import { Component } from '@angular/core';

import { IconList } from '@constants/icons.constants';

import { headerSrcList } from './header.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  scrollDown(): void {
    window.scroll(0, 99999);
  }

  public icon = IconList;

  public headerSrc = IconList.logo.link;
  public headerList = headerSrcList;

  getNewHeader(): void {
    let newHeader =
      this.headerList[Math.floor(Math.random() * this.headerList.length)];
    if (this.headerSrc !== newHeader) {
      this.headerSrc = newHeader;
    } else return this.getNewHeader();
  }
}
