import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollToElementService {
  public scrollToElement(el: string, behaviorType?: 'smooth' | 'auto'): void {
    if (!behaviorType) behaviorType = 'smooth';
    document.querySelector(el)?.scrollIntoView({ behavior: behaviorType });
  }
}
