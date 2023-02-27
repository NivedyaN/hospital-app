import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BldbankComponent } from './bldbank/bldbank.component';
import { DepartmentComponent } from './department/department.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { FecilityComponent } from './fecility/fecility.component';
import { HomeComponent } from './home/home.component';
import { HomecareComponent } from './homecare/homecare.component';

const routes: Routes = [
{
  path:'', component: HomeComponent


},
{
  path:'department', component: DepartmentComponent


},
{
  path:'fecility', component: FecilityComponent       


},
{
  path:'bldbank', component: BldbankComponent                     
    

},
{
  path:'appointment', component: AppointmentComponent       


},
{
  path:'homecare', component: HomecareComponent                     
    

},
{
  path:'ambulance', component: AmbulanceComponent       


},
{
  path:'doctors/:id', component: DoctorsComponent                     
    

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
