import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IntersectionObserverModule } from '@ng-web-apis/intersection-observer';
import { SharedModule } from '@shared/shared.module';

import { CasesRoutingModule } from './cases-routing.module';
import { CasesComponent } from './cases.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [CasesComponent, ProjectListComponent],
  imports: [
    SharedModule,
    RouterLink,
    IntersectionObserverModule,
    CasesRoutingModule,
  ],
})
export class CasesModule {}
