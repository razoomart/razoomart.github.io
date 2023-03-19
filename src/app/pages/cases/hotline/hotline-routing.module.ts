import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotlineComponent } from './hotline.component';

const routes: Routes = [{ path: '', component: HotlineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotlineRoutingModule {}
