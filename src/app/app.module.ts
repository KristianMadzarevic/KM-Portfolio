import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
