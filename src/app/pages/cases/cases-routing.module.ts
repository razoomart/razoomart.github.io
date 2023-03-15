import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CasesComponent } from './cases.component';
import { HotlineComponent } from './hotline/hotline.component';

const routes: Routes = [
  { path: '', component: CasesComponent },
  { path: 'hotline', component: HotlineComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesRoutingModule {}
