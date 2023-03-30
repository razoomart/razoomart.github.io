import { Component } from '@angular/core';
import { IconList } from '@constants/icons.constants';
import { ImageList } from '@constants/images.constants';
import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-short-info',
  templateUrl: './short-info.component.html',
  styleUrls: ['./short-info.component.scss'],
})
export class ShortInfoComponent {
  public icons = IconList;
  public images = ImageList;

  constructor(protected intersectionService: IntersectionService) {}
}
