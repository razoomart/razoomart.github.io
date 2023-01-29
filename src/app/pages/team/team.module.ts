import { NgModule } from '@angular/core';
import { TeamComponent } from '@pages/team/team.component';
import { SharedModule } from '@shared/shared.module';

import { AdvantagesComponent } from './advantages/advantages.component';
import { PrinciplesComponent } from './principles/principles.component';
import { StackComponent } from './stack/stack.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { FirstBlockComponent } from './first-block/first-block.component';

@NgModule({
  declarations: [
    TeamComponent,
    AdvantagesComponent,
    PrinciplesComponent,
    TeamMembersComponent,
    StackComponent,
    FirstBlockComponent,
  ],
  imports: [SharedModule],
  bootstrap: [TeamComponent],
})
export class TeamModule {}
