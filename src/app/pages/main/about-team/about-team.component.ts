import { Component } from '@angular/core';

import { IconList } from '@constants/icons.constants';
import { ImageList } from '@constants/images.constants';
import { MediaLink } from '@enums/link.enums';

import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss'],
})
export class AboutTeamComponent {
  public icons = IconList;
  public images = ImageList;
  public links = MediaLink;

  constructor(protected intersectionService: IntersectionService) {}
}
