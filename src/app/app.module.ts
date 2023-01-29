import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from '@pages/main/main.component';

import { MainModule } from '@pages/main/main.module';
import { TeamModule } from '@pages/team/team.module';
import { VwComponent } from '@pages/vw/vw.component';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, MainComponent, VwComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MainModule,
    TeamModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
