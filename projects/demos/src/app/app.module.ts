import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularSignatureModule} from "angular-signature";

import { PadComponent } from './pad/pad.component';

@NgModule({
  declarations: [
    AppComponent,
    PadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSignatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
