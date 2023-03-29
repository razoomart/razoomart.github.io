import { Component, AfterViewInit } from '@angular/core';
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
export class ProjectListComponent implements AfterViewInit {
  public icons = IconList;
  public images = ImageList;
  public links = MediaLink;
  public videos = VideoList;

  constructor(protected intersectionService: IntersectionService) {}

  ngAfterViewInit(): void {
    const videos = document.querySelectorAll('video');
    const config = {
      rootMargin: '0px',
      threshold: 0.8,
    };
    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (!entry.isIntersecting) {
          entry.target.pause();
        } else {
          entry.target.play();
        }
      });
    };

    const observer = new IntersectionObserver(callback, config);

    videos.forEach((element) => {
      observer.observe(element);
    });
  }
}
