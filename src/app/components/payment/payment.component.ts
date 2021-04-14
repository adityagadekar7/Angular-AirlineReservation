import { Component, OnInit ,NgZone} from '@angular/core';
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
  model:any=[]; 
  ngzone: NgZone;
  router: Router;
  constructor(svc:PaymentService, ngzone:NgZone, router:Router ) 
  { 
    this.svc= svc;
    this.ngzone=ngzone;
    this.router=router;
    
   }

  ngOnInit(): void {
  }
 

  
  PaymentForm(paymentform:NgForm):void{
   // console.log(paymentform.value);
   this.payment.CardNo=paymentform.value.Card_Number;
   this.payment.cardtype=paymentform.value.cardtype;
   this.payment.Expiry_Month=paymentform.value.month;
   this.payment.Expiry_year=paymentform.value.year;

   this.svc.CheckPayment(this.payment.CardNo,this.payment.cardtype,this.payment.Expiry_Month,this.payment.Expiry_year).subscribe((data:any)=>
   {
    // console.log(data);
     if(data=="Payment Successful")
     {
       alert("Payment Successful");
       //localStorage.setItem('UID',this.regau.UserId.toString());
      // this.ngzone.run(()=>this.router.navigateByUrl('/TicketDetails'));
       
 
     }
     else{
       alert("Enter Valid Card Details");
     }
     //console.log(loginForm.value);
   });
 }
  
}
