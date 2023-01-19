import { Component } from '@angular/core';
import { headerSrcList } from '@components/header/header.constants';
import { IconList } from '@constants/icons.constants';
import { AnchorPath } from '@enums/anchor.enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public anchorPath = AnchorPath;
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
