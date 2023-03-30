import { Component } from '@angular/core';
import { ImageList } from '@constants/images.constants';
import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-part-three',
  templateUrl: './part-three.component.html',
  styleUrls: ['./part-three.component.scss'],
})
export class PartThreeComponent {
  public images = ImageList;

  constructor(protected intersectionService: IntersectionService) {}
}
