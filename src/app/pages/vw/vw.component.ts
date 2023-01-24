import { Component } from '@angular/core';
import { IconList } from '@constants/icons.constants';

@Component({
  selector: 'app-vw',
  templateUrl: './vw.component.html',
  styleUrls: ['./vw.component.scss'],
})
export class VwComponent {
  public icons = IconList;

  public vwValue = 0;
  public pxValue = 0;
  public widthValue = 1920;

  convertVwToPx(value: string): void {
    this.pxValue = (this.widthValue * Number(value)) / 100;
  }

  convertPxToVw(value: string): void {
    this.vwValue = (100 * Number(value)) / this.widthValue;
  }

  changeCustomWidth(value: string): void {
    this.widthValue = Number(value);
  }
}
