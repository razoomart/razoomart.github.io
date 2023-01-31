import { Component } from '@angular/core';
import { IconList } from '@constants/icons.constants';
import { ImageList } from '@constants/images.constants';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss'],
})
export class CasesComponent {
  public icons = IconList;
  public images = ImageList;
}
