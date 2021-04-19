import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ResgisterauModule {
  
  
  User_Id:number;   //------------//CHECK
  Title: string;
  FirstName: string;
  LastName: string;
  EmailID: string;
  Password:string; //added
  DOB: string;
  PhoneNumber: number;
 OTP: string;
 ActivationCode:string



}
