import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public headerSrc = 'assets/icons/logo.svg';

  public headerSrcList: string[] = [
    'assets/icons/logo.svg',
    'assets/icons/logo_antihype.svg',
    'assets/icons/logo_dobro.svg',
    'assets/icons/logo_drzhk.svg',
    'assets/icons/logo_korean.svg',
    'assets/icons/logo_maxfont.svg',
    'assets/icons/logo_minecraft.svg',
    'assets/icons/logo_ru.svg',
    'assets/icons/logo_uwu.svg',
  ];

  getNewHeader(): void {
    let newHeader =
      this.headerSrcList[Math.floor(Math.random() * this.headerSrcList.length)];
    if (this.headerSrc !== newHeader) {
      this.headerSrc = newHeader;
    } else return this.getNewHeader();
  }
}
