import { Component } from '@angular/core';

import { IconList } from '@constants/icons.constants';

import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent {
  public icons = IconList;

  constructor(protected intersectionService: IntersectionService) {}
}
