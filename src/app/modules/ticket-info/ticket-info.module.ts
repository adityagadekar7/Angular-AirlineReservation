import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TicketInfoModule {
  User_Id:number;
  Pnr_no:number;
  Airport_Name:string;
  State:string;
  Zip_Code:number;
  Flight_Date:string;
  Flight_Number:number;
  Origin:string;
  Destination:string;
  Flight_Departing_Time:string;
  Flight_Arrival_Time:string;
  Reservation_Date:string;
  Reservation_Time:string;
  num_of_Seats:number;
  Classtype:string;
  total_price:number;
  Passenger_id:number;
  FirstName:string;
  LastName:string;
  PassportNumber:number;
  DOB:string;
  Gender:string;
  PhoneNumber:number;
  CovidCertificate:string;
  status:string;
  Seats:string;
  //can
  Refund_Amount:number;
  Dateofcancellation:string;
  timeofcancellation:string;
 }
