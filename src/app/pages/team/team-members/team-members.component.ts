import { Component } from '@angular/core';

import { IconList } from '@constants/icons.constants';
import { ImageList } from '@constants/images.constants';

import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
})
export class TeamMembersComponent {
  public images = ImageList;
  public icons = IconList;

  constructor(protected intersectionService: IntersectionService) {}
}
