import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CasesComponent } from '@pages/cases/cases.component';
import { MainComponent } from '@pages/main/main.component';
import { TeamComponent } from '@pages/team/team.component';
import { VwComponent } from '@pages/vw/vw.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'team', component: TeamComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'vw', component: VwComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
