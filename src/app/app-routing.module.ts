import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '@pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'team',
    loadChildren: () =>
      import('./pages/team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'cases',
    loadChildren: () =>
      import('./pages/cases/cases.module').then((m) => m.CasesModule),
  },
  {
    path: 'vw',
    loadChildren: () => import('./pages/vw/vw.module').then((m) => m.VwModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
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
