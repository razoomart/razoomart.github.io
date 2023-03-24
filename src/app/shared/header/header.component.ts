import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IconList } from '@constants/icons.constants';
import { AnchorPath } from '@enums/anchor.enums';
import { MediaLink } from '@enums/link.enums';
import { ScrollToElementService } from '@services/scroll-to-element.service';

import { headerSrcList } from './header.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  get clickAction(): void | Promise<boolean> {
    return this.router.url !== this.links.PAGE_NOT_FOUND
      ? this.scroll(this.anchorPath.LETS_WORK)
      : this.router.navigate(['/']);
  }

  get buttonTitle(): string {
    return this.router.url !== this.links.PAGE_NOT_FOUND
      ? 'Написать'
      : 'Главная';
  }

  public isMenuOpened = false;
  public currentUrl = '/';
  public icons = IconList;
  public headerSrc = IconList.logo.link;
  public headerList = headerSrcList;
  public links = MediaLink;
  public anchorPath = AnchorPath;

  constructor(
    private router: Router,
    private scrollService: ScrollToElementService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.currentUrl = event.url;
    });
  }

  menuToggle(): void {
    if (this.isMenuOpened) {
      this.isMenuOpened = false;
      document.body.classList.remove('scroll-disabled');
    } else {
      this.isMenuOpened = true;
      document.body.classList.add('scroll-disabled');
    }
  }

  mobileBtnAction(): void {
    if (this.router.url === this.links.PAGE_NOT_FOUND) {
      this.router.navigate(['/']);
      this.isMenuOpened = false;
      document.body.classList.remove('scroll-disabled');
      setTimeout(() => {
        this.scroll(this.anchorPath.LETS_WORK);
      }, 100);
    } else {
      this.isMenuOpened = false;
      document.body.classList.remove('scroll-disabled');
      this.scroll(this.anchorPath.LETS_WORK);
    }
  }

  scrollTop(): void {
    if (this.currentUrl !== '/') return;
    this.scroll(this.anchorPath.FIRST_BLOCK);
  }

  scroll(el: string): void {
    this.scrollService.scrollToElement(el);
  }

  getNewHeader(): void {
    let newHeader =
      this.headerList[Math.floor(Math.random() * this.headerList.length)];
    if (this.headerSrc !== newHeader) this.headerSrc = newHeader;
    else return this.getNewHeader();
  }
}
