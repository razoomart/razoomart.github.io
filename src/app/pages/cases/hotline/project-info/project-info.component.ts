import { Component } from '@angular/core';
import { ImageList } from '@constants/images.constants';
import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent {
  public images = ImageList;

  constructor(protected intersectionService: IntersectionService) {}
}
