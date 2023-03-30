import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BequickComponent } from './bequick.component';

const routes: Routes = [{ path: '', component: BequickComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BequickRoutingModule {}
