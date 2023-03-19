import { Component } from '@angular/core';
import { ImageList } from '@constants/images.constants';

@Component({
  selector: 'app-part-three',
  templateUrl: './part-three.component.html',
  styleUrls: ['./part-three.component.scss'],
})
export class PartThreeComponent {
  public images = ImageList;
}
