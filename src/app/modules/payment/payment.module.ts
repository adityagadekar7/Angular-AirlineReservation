import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { 

  UserId:number; 
  CardNo:bigint;
  cardtype:string;
  Expiry_Month:number;
  Expiry_year:number;
  Balance: number;
}
