import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntersectionService {
  public onIntersection(
    intersections: IntersectionObserverEntry[],
    addClass: string,
    removeClass: string,
    timeout?: number
  ): void {
    if (!timeout) timeout = 0;
    const length = intersections.length - 1;
    if (!intersections[length]?.isIntersecting) return;
    setTimeout(() => {
      intersections[length].target.classList.remove(removeClass);
      intersections[length].target.classList.add(addClass);
    }, timeout);
  }
}
