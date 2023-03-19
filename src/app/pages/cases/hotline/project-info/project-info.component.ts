import { Component } from '@angular/core';
import { ImageList } from '@constants/images.constants';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent {
  public images = ImageList;
}
