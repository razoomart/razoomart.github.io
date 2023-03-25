import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BequickRoutingModule } from './bequick-routing.module';
import { BequickComponent } from './bequick.component';

@NgModule({
  declarations: [BequickComponent],
  imports: [CommonModule, BequickRoutingModule],
})
export class BequickModule {}
