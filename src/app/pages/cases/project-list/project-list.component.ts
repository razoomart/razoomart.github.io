import { Component } from '@angular/core';
import { IconList } from '@constants/icons.constants';
import { ImageList } from '@constants/images.constants';
import { VideoList } from '@constants/videos.constants';
import { MediaLink } from '@enums/link.enums';
import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  public icons = IconList;
  public images = ImageList;
  public links = MediaLink;
  public videos = VideoList;

  constructor(protected intersectionService: IntersectionService) {}
}
