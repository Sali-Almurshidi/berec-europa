import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryInformationComponent } from './country-information/country-information.component';
import { EmergencyServicesComponent } from './emergency-services/emergency-services.component';
import { PublicWarningSystemComponent } from './public-warning-system/public-warning-system.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    CountryInformationComponent,
    EmergencyServicesComponent,
    PublicWarningSystemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
