import { Component } from '@angular/core';
import { IntersectionService } from '@services/intersection.service';

@Component({
  selector: 'app-principles',
  templateUrl: './principles.component.html',
  styleUrls: ['./principles.component.scss'],
})
export class PrinciplesComponent {
  constructor(protected intersectionService: IntersectionService) {}
}
