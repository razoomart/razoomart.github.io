import { Component } from '@angular/core';
import { IconList } from '@constants/icons.constants';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent {
  public icons = IconList;
}
