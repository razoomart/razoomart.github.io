import { Component, OnInit } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';
import { IconList } from '@constants/icons.constants';
import { AnchorPath } from '@enums/anchor.enums';

import { ScrollToElementService } from '@services/scroll-to-element.service';

import { headerSrcList } from './header.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isMenuOpened = false;
  public currentUrl = '/';
  public icons = IconList;

  public headerSrc = IconList.logo.link;
  public headerList = headerSrcList;
  public anchorPath = AnchorPath;

  constructor(
    private router: Router,
    private scrollToEl: ScrollToElementService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.currentUrl = event.url;
    });
  }

  scroll(el: string): void {
    this.scrollToEl.scrollToElement(el);
  }

  getNewHeader(): void {
    let newHeader =
      this.headerList[Math.floor(Math.random() * this.headerList.length)];
    if (this.headerSrc !== newHeader) {
      this.headerSrc = newHeader;
    } else return this.getNewHeader();
  }
}
