import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from '@components/header/header.component';
import { LetsWorkComponent } from '@components/lets-work/lets-work.component';

import { MainComponent } from '@pages/main/main.component';
import { MainModule } from '@pages/main/main.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LetsWorkComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
