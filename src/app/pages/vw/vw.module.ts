import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { VwRoutingModule } from './vw-routing.module';
import { VwComponent } from './vw.component';

@NgModule({
  declarations: [VwComponent],
  imports: [CommonModule, VwRoutingModule, FormsModule],
})
export class VwModule {}
