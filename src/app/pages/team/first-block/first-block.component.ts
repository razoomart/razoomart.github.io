import { Component } from '@angular/core';

import { IconList } from '@constants/icons.constants';

import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-first-block',
  templateUrl: './first-block.component.html',
  styleUrls: ['./first-block.component.scss'],
})
export class FirstBlockComponent {
  public icons = IconList;

  constructor(protected intersectionService: IntersectionService) {}
}
