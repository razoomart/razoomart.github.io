import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CasesComponent } from './cases.component';

@NgModule({
  declarations: [CasesComponent],
  imports: [SharedModule],
})
export class CasesModule {}
