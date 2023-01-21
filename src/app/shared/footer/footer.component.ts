import { Component } from '@angular/core';
import { IconList } from '@constants/icons.constants';
import { MediaLink } from '@enums/link.enums';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public icons = IconList;
  public mediaLink = MediaLink;
}
