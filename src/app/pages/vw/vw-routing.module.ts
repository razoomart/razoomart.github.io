import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VwComponent } from './vw.component';

const routes: Routes = [{ path: '', component: VwComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VwRoutingModule {}
