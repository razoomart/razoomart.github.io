import { Component } from '@angular/core';

import { ImageList } from '@constants/images.constants';
import { MediaLink } from '@enums/link.enums';

import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-lets-work',
  templateUrl: './lets-work.component.html',
  styleUrls: ['./lets-work.component.scss'],
})
export class LetsWorkComponent {
  public mediaLink = MediaLink;
  public images = ImageList;

  constructor(protected intersectionService: IntersectionService) {}
}
