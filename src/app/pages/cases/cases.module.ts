import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CasesComponent } from './cases.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [CasesComponent, ProjectListComponent],
  imports: [SharedModule],
})
export class CasesModule {}
