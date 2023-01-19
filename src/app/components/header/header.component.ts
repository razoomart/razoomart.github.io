import { Component } from '@angular/core';
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
  public headerSrcList: string[] = [
    IconList.logoAntiHype.link,
    IconList.logoDobro.link,
    IconList.logoDrzhk.link,
    IconList.logoKorean.link,
    IconList.logoMaxfont.link,
    IconList.logoMinecraft.link,
    IconList.logoRu.link,
    IconList.logoUwu.link,
  ];

  getNewHeader(): void {
    let newHeader =
      this.headerSrcList[Math.floor(Math.random() * this.headerSrcList.length)];
    if (this.headerSrc !== newHeader) {
      this.headerSrc = newHeader;
    } else return this.getNewHeader();
  }
}
