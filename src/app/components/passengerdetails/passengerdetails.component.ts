import { Component, OnInit,NgModule,NgZone} from '@angular/core';
import {FormsModule,FormGroup,NgForm,NgModel} from '@angular/forms';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import{PassengerInfoService}from 'src/app/services/passenger-info.service';
import{PassengerInfoModule} from 'src/app/modules/passenger-info/passenger-info.module';
import { TicketInfoService } from 'src/app/services/ticket-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passengerdetails',
  templateUrl: './passengerdetails.component.html',
  styleUrls: ['./passengerdetails.component.css']
})
export class PassengerdetailsComponent implements OnInit {

  svc : PassengerInfoService;
  svc1:TicketInfoService;
  pi = new PassengerInfoModule();
  data : PassengerInfoModule; // for delete
  model:any=[];
  TotalSeats:Number;
  SeatNos:string;
  TotalPrice:Number;
  ngzone: NgZone;
    router: Router;
    
    returnCount:number;
  
  test:number;
  Flight_Number:number;
  flag:number;
  flagX:number;
  Count:number;
  


  constructor(svc : PassengerInfoService, svc1:TicketInfoService,ngzone:NgZone, router:Router) 
  {
    this.svc = svc;
    this.svc1 = svc1;
    this.ngzone=ngzone;
    this.router=router;
  }

  ngOnInit(): void {
    this.TotalSeats=Number(localStorage.getItem('TOTALSEATS'));
    this.SeatNos=String(localStorage.getItem('SEATNO'));
    this.TotalPrice=Number(localStorage.getItem('PRICE'));
    this.Flight_Number=Number(localStorage.getItem('FLIGHTNO'));
    this.flag=Number(localStorage.getItem('FLAG'));
    console.log(this.TotalSeats);
    console.log(this.SeatNos);
    console.log(this.TotalPrice);
    alert(this.TotalSeats+" + "+this.SeatNos+" "+this.flag);

    this.Count++;
     // GetPnr():void{
        this.svc1.GetPnr().subscribe((datapnr:number)=>{
       this.test=datapnr;
       console.log(this.test);
     });
  }

  Continue():void{
    localStorage.setItem('PNR',(this.test).toString());
    localStorage.setItem('FLIGHTNO',(this.Flight_Number).toString());
    localStorage.setItem('FLAG',this.flag.toString());
    if(this.flag==2){
      localStorage.setItem('TEMPPRICE',(this.TotalPrice).toString());
      localStorage.setItem('PNR1',(this.test).toString());
    localStorage.setItem('FLIGHTNO1',(this.Flight_Number).toString());
    localStorage.setItem('FLAG1',this.flag.toString());
    localStorage.setItem('SEATNO1',this.SeatNos);
    this.flagX=1;
    localStorage.setItem('FLAGX',this.flagX.toString());

      this.ngzone.run(() => this.router.navigateByUrl('/FlightSelect'));
    }
    else{
      
      this.ngzone.run(() => this.router.navigateByUrl('/PaymentForm'));
    }
  }


  PassDet(passdet:NgForm):void{
   // console.log(passdet.value);
    //this.pi.Passenger_id = passdet.value.Passenger_id;
    this.pi.Pnr_no =this.test;
    this.pi.PassportNumber = passdet.value.PassportNumber;
    this.pi.FirstName =  passdet.value.FirstName;
    this.pi.LastName =  passdet.value.LastName;
    this.pi.DOB =  passdet.value.DOB;
    this.pi.Gender =  passdet.value.gen;
    this.pi.PhoneNumber =  passdet.value.PhoneNumber;
    this.pi.CovidCertificate =  passdet.value.cc;
    
    //this.ngzone.run(()=>this.router.navigateByUrl('/PaymentForm'));
    
    
    this.svc.InsertNewPassenger(this.pi).subscribe((data:boolean)=>
    {
      console.log(data);
      if(data == true)
      {
        alert("New Passenger Added");
<<<<<<< HEAD
        this.ngzone.run(() => this.router.navigateByUrl('/PaymentForm'));
=======
        // if(this.flag==0){  //--------------------------------------------------CHECK---------------------------------------//
        //   this.ngzone.run(() => this.router.navigateByUrl('/PaymentForm'));
        // }
        // else{
        //   this.ngzone.run(() => this.router.navigateByUrl('/FlightSelect'));
        // }
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b
      }
      else
      {
        alert("Enter details");
      }
    });

  }

  /*DeleteFunction(deleteForm:NgForm):void{
    this.pi.Passenger_id=deleteForm.value.Passenger_id;
    this.svc.DeletePassenger(this.pi.Passenger_id).subscribe((data:boolean)=>
    {
      //alert(data);
      console.log(data);
      if(data==true)
      {
        alert('Delete successful');
        location.reload();
      }
      else
      {
        alert('Delete unsuccessful');
      }
    });
  }*/

}
