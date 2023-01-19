import { Component } from '@angular/core';
import { ImageList } from '@constants/images.constants';
import { Link } from '@enums/link.enums';

@Component({
  selector: 'app-lets-work',
  templateUrl: './lets-work.component.html',
  styleUrls: ['./lets-work.component.scss'],
})
export class LetsWorkComponent {
  public link = Link;
  public images = ImageList;
}
