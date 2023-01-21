import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '@pages/main/main.component';
import { TeamComponent } from '@pages/team/team.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
