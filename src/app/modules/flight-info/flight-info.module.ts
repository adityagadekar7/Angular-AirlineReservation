import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FlightInfoModule { 
  Flight_Number:number;
  Flight_Name:string;
  Flight_Date:string;
  Airport_Code:number;
  Airport_Name:string;
  Flight_Departing_Time:string;
  Flight_Arrival_Time:string;
  Origin:string;
  Destination:string;
  Flight_Status:string;
  Cost_Eco:number;
  Cost_Business:number;
  Seats:string;
}
