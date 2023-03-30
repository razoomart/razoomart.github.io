import { Component } from '@angular/core';
import { ImageList } from '@constants/images.constants';
import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
})
export class AdvantagesComponent {
  public images = ImageList;

  constructor(protected intersectionService: IntersectionService) {}
}
