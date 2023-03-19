import { Component } from '@angular/core';
import { ImageList } from '@constants/images.constants';
import { VideoList } from '@constants/videos.constants';

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.component.html',
  styleUrls: ['./part-one.component.scss'],
})
export class PartOneComponent {
  public images = ImageList;
  public videos = VideoList;
}
