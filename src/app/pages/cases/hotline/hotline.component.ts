import { Component } from '@angular/core';
import { ImageList } from '@constants/images.constants';

@Component({
  selector: 'app-hotline',
  templateUrl: './hotline.component.html',
  styleUrls: ['./hotline.component.scss'],
})
export class HotlineComponent {
  public images = ImageList;
}
