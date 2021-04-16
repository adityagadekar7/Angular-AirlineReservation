import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FlightReservationModule { 
  Flight_Number:number;
  Flight_Name:string;
  Flight_Date:string;
  Airport_Code:number;
  Flight_Departing_Time:string;
  Flight_Arrival_Time:string;
  Origin:string;
  Destination:string;
  Flight_Status:string;
  Cost_Eco:number;
  Cost_Business:number;
  Seats_Available_Eco:number;
  Seats_Available_Business:number;

  Pnr_no : number;
  User_Id : number;
  Reservation_Date : string;
  Reservation_Time :string;
  num_of_Seats : number;
  Classtype : string;
  total_price : number;
  status : string;
}
