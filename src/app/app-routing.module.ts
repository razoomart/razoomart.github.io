import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CasesComponent } from '@pages/cases/cases.component';
import { MainComponent } from '@pages/main/main.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { TeamComponent } from '@pages/team/team.component';
import { VwComponent } from '@pages/vw/vw.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'team', component: TeamComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'vw', component: VwComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: '404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
