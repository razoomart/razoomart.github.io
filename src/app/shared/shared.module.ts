import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterLink } from '@angular/router';

import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';
import { LetsWorkComponent } from '@shared/lets-work/lets-work.component';

@NgModule({
  declarations: [HeaderComponent, LetsWorkComponent, FooterComponent],
  imports: [CommonModule, RouterLink],
  exports: [HeaderComponent, LetsWorkComponent, FooterComponent],
})
export class SharedModule {}
