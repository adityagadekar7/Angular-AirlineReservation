import { Component, OnInit ,NgZone} from '@angular/core';
import {FormsModule,NgForm,FormGroup,NgModel} from '@angular/forms';
import{Router} from '@angular/router';
import{PaymentService}from 'src/app/services/payment.service';
import{PaymentModule} from 'src/app/modules/payment/payment.module';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { TicketInfoModule } from 'src/app/modules/ticket-info/ticket-info.module';
import { PassengerInfoService } from 'src/app/services/passenger-info.service';
import { TicketInfoService } from 'src/app/services/ticket-info.service';
import { PassengerInfoModule } from 'src/app/modules/passenger-info/passenger-info.module';
import { BookingInfoService } from 'src/app/services/booking-info.service';

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
  TotalSeats:number;
  Seats:string;
  TotalPrice:number;

  //---------------
  svc1:BookingInfoService;
  svc2:PassengerInfoService;
  pi= new PassengerInfoModule();
  i:number;
  Flight_Number:number;
  trial:string;
  Pnr_no:number;

  



  
  //-----------
  constructor(svc:PaymentService,svc1:BookingInfoService, svc2:PassengerInfoService,ngzone:NgZone, router:Router ) 
  { 
    this.svc= svc;
    this.svc1=svc1
    this.svc2=svc2;
    this.ngzone=ngzone;
    this.router=router;
    
   }

  ngOnInit(): void {
    this.TotalSeats=Number(localStorage.getItem('TOTALSEATS'));
    this.Seats=String(localStorage.getItem('SEATNO'));
    this.TotalPrice=Number(localStorage.getItem('PRICE'));
    this.Pnr_no=Number(localStorage.getItem('PNR'));
    this.Flight_Number=Number(localStorage.getItem('FLIGHTNO'));
    //this.Flight_Number=1;
    console.log(this.TotalSeats);
    console.log(this.Seats);
    console.log(this.TotalPrice);
    alert(this.TotalSeats+" + "+this.Seats);
    
  }
  

  PaymentForm(paymentform:NgForm):void{
   // console.log(paymentform.value);
   this.payment.CardNo=paymentform.value.Card_Number;
   this.payment.cardtype=paymentform.value.cardtype;
   this.payment.Expiry_Month=paymentform.value.month;
   this.payment.Expiry_year=paymentform.value.year;
   //console.log(this.Seats);


   this.svc.CheckPayment(this.payment.CardNo,this.payment.cardtype,this.payment.Expiry_Month,this.payment.Expiry_year).subscribe((data:any)=>
   {
    // console.log(data);
     if(data=="Payment Successful")
     {
<<<<<<< HEAD
      //this.InsertInFlightReservation();
      alert("Payment Successful");
      alert(this.Flight_Number+" "+this.Seats);
      

      this.svc1.UpdateSeats(this.Flight_Number,this.Seats,this.Pnr_no).subscribe((data:boolean)=>
      {
      console.log(data);
      if(data == true)
      {
        alert("Seats Added");
      }
      else
      {
        alert("Seats not selected");
      }
    });
    }
     
=======
       alert("Payment Successful");
       //localStorage.setItem('UID',this.regau.UserId.toString());
       this.ngzone.run(()=>this.router.navigateByUrl('/TicketDetails'));
>>>>>>> eef995e9a2bb54ddc86d734639704eaef14be4c3
       
     else{
       alert("Enter Valid Card Details");
     }
     //console.log(loginForm.value);
   });
 }

//  Button1():void{
//     this.GetPnr();
//  }
  
}
