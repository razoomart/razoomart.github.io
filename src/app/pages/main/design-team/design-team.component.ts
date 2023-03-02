import { Component } from '@angular/core';

import { IconList } from '@constants/icons.constants';
import { ImageList } from '@constants/images.constants';
import { AnchorPath } from '@enums/anchor.enums';

import { IntersectionService } from '@services/intersection.service';
import { ScrollToElementService } from '@services/scroll-to-element.service';

@Component({
  selector: 'app-design-team',
  templateUrl: './design-team.component.html',
  styleUrls: ['./design-team.component.scss'],
})
export class DesignTeamComponent {
  public icons = IconList;
  public images = ImageList;
  public anchorPath = AnchorPath;

  constructor(
    private scrollToEl: ScrollToElementService,
    protected intersectionService: IntersectionService
  ) {}

  public scroll(el: string): void {
    this.scrollToEl.scrollToElement(el);
  }
}
