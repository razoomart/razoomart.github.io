import { Component } from '@angular/core';

import { IconList } from '@constants/icons.constants';
import { ImageList } from '@constants/images.constants';

import { AnchorPath } from '@enums/anchor.enums';
import { Link } from '@enums/link.enums';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public anchorPath = AnchorPath;
  public link = Link;
  public icons = IconList;
  public images = ImageList;
}
