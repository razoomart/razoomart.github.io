import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgtCanvas } from '@angular-three/core';
import { NgtColorAttributeModule } from '@angular-three/core/attributes';
import { NgtPointLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';

import { CasesModule } from '@pages/cases/cases.module';
import { MainComponent } from '@pages/main/main.component';

import { MainModule } from '@pages/main/main.module';
import { NotFoundModelComponent } from '@pages/not-found/not-found-model/not-found-model.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { TeamModule } from '@pages/team/team.module';
import { VwComponent } from '@pages/vw/vw.component';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    VwComponent,
    NotFoundComponent,
    NotFoundModelComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MainModule,
    TeamModule,
    CasesModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    NgtCanvas,
    NgtColorAttributeModule,
    NgtPointLightModule,
    NgtPrimitiveModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
