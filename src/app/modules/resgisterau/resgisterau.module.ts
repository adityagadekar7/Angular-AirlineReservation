import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ResgisterauModule {
  
  
  UserId:number;   //------------//CHECK
  Title: string;
  FirstName: string;
  LastName: string;
  EmailID: string;
  Password:string; //added
  DOB: string;
  PhoneNumber: number;



}
