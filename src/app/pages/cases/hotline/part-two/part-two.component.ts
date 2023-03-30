import { Component } from '@angular/core';
import { ImageList } from '@constants/images.constants';
import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-part-two',
  templateUrl: './part-two.component.html',
  styleUrls: ['./part-two.component.scss'],
})
export class PartTwoComponent {
  public images = ImageList;

  constructor(protected intersectionService: IntersectionService) {}
}
