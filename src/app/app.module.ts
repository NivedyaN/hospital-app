import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DepartmentComponent } from './department/department.component';
import { FecilityComponent } from './fecility/fecility.component';
import { HomeComponent } from './home/home.component';
import { BldbankComponent } from './bldbank/bldbank.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomecareComponent } from './homecare/homecare.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { DoctorsComponent } from './doctors/doctors.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DepartmentComponent,
    FecilityComponent,
    HomeComponent,
    BldbankComponent,
    AppointmentComponent,
    HomecareComponent,
    AmbulanceComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
