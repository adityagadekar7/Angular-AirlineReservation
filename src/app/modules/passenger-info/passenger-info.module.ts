import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PassengerInfoModule {
  // Passenger_id : number;
  Pnr_no : number;
  PassportNumber : number;
  FirstName : string;
  LastName : string;
  DOB : string;
  Gender : string;
  PhoneNumber:number;
  CovidCertificate:string;
 }
