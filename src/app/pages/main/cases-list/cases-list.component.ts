import { Component } from '@angular/core';

import { IconList } from '@constants/icons.constants';
import { ImageList } from '@constants/images.constants';
import { MediaLink } from '@enums/link.enums';

import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
})
export class CasesListComponent {
  public icons = IconList;
  public images = ImageList;
  public links = MediaLink;

  constructor(protected intersectionService: IntersectionService) {}
}
