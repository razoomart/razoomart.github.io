import { Component } from '@angular/core';
import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
})
export class AdvantagesComponent {
  constructor(protected intersectionService: IntersectionService) {}
}
