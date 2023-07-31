import { Component } from '@angular/core';

import { IconList } from '@constants/icons.constants';

@Component({
  selector: 'app-short-about',
  templateUrl: './short-about.component.html',
  styleUrls: ['./short-about.component.scss'],
})
export class ShortAboutComponent {
  public icons = IconList;
}
