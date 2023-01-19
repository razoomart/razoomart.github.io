import { Component } from '@angular/core';
import { IconList } from '@constants/icons.constants';
import { ImageList } from '@constants/images.constants';

@Component({
  selector: 'app-how-we-working',
  templateUrl: './how-we-working.component.html',
  styleUrls: ['./how-we-working.component.scss'],
})
export class HowWeWorkingComponent {
  public icons = IconList;
  public images = ImageList;
}
