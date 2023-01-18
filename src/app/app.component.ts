import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public headerSrc = 'assets/icons/razoomart-logo.svg';

  public headerSrcList: string[] = [
    'assets/icons/razoomart-logo3.svg',
    'assets/icons/razoomart-logo4.svg',
    'assets/icons/razoomart-logo5.svg',
    'assets/icons/razoomart-logo6.svg',
  ];

  getNewHeader(): void {
    this.headerSrc =
      this.headerSrcList[Math.floor(Math.random() * this.headerSrcList.length)];
  }
}
