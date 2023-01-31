import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollToElementService {
  constructor(private viewportScroller: ViewportScroller) {}

  public scrollToElement(el: string): void {
    if (!el) return;
    this.viewportScroller.scrollToAnchor(el);
  }
}
