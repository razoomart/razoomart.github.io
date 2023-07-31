import { NgModule } from '@angular/core';
import { IntersectionObserverModule } from '@ng-web-apis/intersection-observer';
import { SharedModule } from '@shared/shared.module';

import { AdvantagesComponent } from './advantages/advantages.component';
import { FirstBlockComponent } from './first-block/first-block.component';
import { PrinciplesComponent } from './principles/principles.component';
import { StackComponent } from './stack/stack.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';

@NgModule({
  declarations: [
    TeamComponent,
    AdvantagesComponent,
    PrinciplesComponent,
    TeamMembersComponent,
    StackComponent,
    FirstBlockComponent,
  ],
  imports: [SharedModule, IntersectionObserverModule, TeamRoutingModule],
})
export class TeamModule {}
