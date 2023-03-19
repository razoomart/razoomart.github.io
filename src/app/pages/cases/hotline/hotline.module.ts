import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { HotlineRoutingModule } from './hotline-routing.module';
import { HotlineComponent } from './hotline.component';
import { PartOneComponent } from './part-one/part-one.component';
import { PartThreeComponent } from './part-three/part-three.component';
import { PartTwoComponent } from './part-two/part-two.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ShortInfoComponent } from './short-info/short-info.component';

@NgModule({
  declarations: [
    HotlineComponent,
    ShortInfoComponent,
    ProjectInfoComponent,
    PartOneComponent,
    PartTwoComponent,
    PartThreeComponent,
  ],
  imports: [CommonModule, HotlineRoutingModule, SharedModule],
})
export class HotlineModule {}
