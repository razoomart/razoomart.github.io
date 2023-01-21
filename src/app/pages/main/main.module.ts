import { NgModule } from '@angular/core';

import { RouterLink } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { AboutTeamComponent } from './about-team/about-team.component';
import { CasesListComponent } from './cases-list/cases-list.component';
import { DesignTeamComponent } from './design-team/design-team.component';
import { HowWeWorkingComponent } from './how-we-working/how-we-working.component';
import { ShortAboutComponent } from './short-about/short-about.component';

@NgModule({
  declarations: [
    AboutTeamComponent,
    CasesListComponent,
    HowWeWorkingComponent,
    DesignTeamComponent,
    ShortAboutComponent,
  ],
  imports: [SharedModule, RouterLink],
  exports: [
    AboutTeamComponent,
    CasesListComponent,
    HowWeWorkingComponent,
    DesignTeamComponent,
    ShortAboutComponent,
  ],
})
export class MainModule {}
