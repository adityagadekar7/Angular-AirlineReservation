import { Component, OnInit ,NgModule} from '@angular/core';
import {FormsModule,NgForm,FormGroup,NgModel} from '@angular/forms';
import{Router} from '@angular/router';
import{PaymentService}from 'src/app/services/payment.service';
import{PaymentModule} from 'src/app/modules/payment/payment.module';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  svc: PaymentService;
  payment= new PaymentModule();
  data: PaymentModule;
  model:any=[]; 
 // ngzone: NgZone;
  //router: Router;
  constructor(svc:PaymentService ) 
  { 
    this.svc= svc;
  //  this.ngzone=ngzone;
    //this.router=router;
    
   }

  ngOnInit(): void {
  }
 

  
  PaymentForm(paymentform:NgForm):void{
   console.log(paymentform.value);
   this.payment.UserId=3;
   this.payment.CardNo=paymentform.value.Card_Number;
   this.payment.cardtype=paymentform.value.cardtype;
   this.payment.Expiry_Month=paymentform.value.month;
   this.payment.Expiry_year=paymentform.value.year;
   this.payment.Balance= 40000;
 
//this code checks for the DB and displays "payment successful" if db has data(working)
  /* this.svc.CheckPayment(this.payment.CardNo,this.payment.cardtype,this.payment.Expiry_Month,this.payment.Expiry_year).subscribe((data:any)=>
   { 
     alert(data);
     console.log(data);
     if(data=="Payment Successful")
     {
       alert("Payment Successful");
       
     }
     else if(data == true) {
       alert('Card registered ! Payment successful');
      
     }
   });*/

//this code is for inserting data in database
   console.log(this.payment);

    this.svc.InsertCard(this.payment).subscribe((data: boolean) => {
      alert(data);
      if (data == true) {
        alert('card registered successfully');
      
      }
      else{
        alert("Register your card");
      }
    });
 }

  
}
