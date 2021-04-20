import {FlightReservationModule} from 'src/app/modules/flight-reservation/flight-reservation.module';
import {FlightReservationService} from 'src/app/services/flight-reservation.service';
import {FlightInfoModule} from 'src/app/modules/flight-info/flight-info.module';
import {FlightInfoService} from 'src/app/services/flight-info.service';
import { Component, OnInit,ViewChild ,NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm, FormGroup, NgModel } from '@angular/forms';
import { BookingInfoService } from 'src/app/services/booking-info.service';
import { TicketInfoModule } from 'src/app/modules/ticket-info/ticket-info.module';

@Component({
  selector: 'app-flightselect',
  templateUrl: './flightselect.component.html',
  styleUrls: ['./flightselect.component.css']
})
export class FlightselectComponent implements OnInit {
  model: any = [];
  svc: BookingInfoService;
  svc1: FlightInfoService;
  //frm = new FlightReservationModule();
  fi=new FlightInfoModule;
  flist: FlightInfoModule;
  flist1: FlightInfoModule;
  Origin: string;
  Destination: string;
  Flight_Name: string;
  Flight_Date: string;
  flag:number;
  flagX:number;
  show: boolean;
  showButton:boolean;
  returnCount:number;

  FlagSearch:boolean;

  ReturnOrigin: string;
  ReturnDestination: string;
  ReturnFlight_Name: string;
  ReturnFlight_Date: string;
  ngzone: NgZone;
  router: Router;  
  uid:number;

  constructor(svc: BookingInfoService, svc1: FlightInfoService,  ngzone:NgZone, router:Router) {
    this.svc = svc;
    this.svc1 = svc1;
    this.ngzone = ngzone;
    this.router = router; }


  ngOnInit(): void {
    this.Flight_Name = String(localStorage.getItem('FLIGHTNAME'));
    this.Flight_Date = String(localStorage.getItem('FLIGHTDATE'));
    this.Origin = String(localStorage.getItem('ORIGIN'));
    this.Destination = String(localStorage.getItem('DESTINATION'));
    this.flag=Number(localStorage.getItem('FLAG'));
    this.flagX=Number(localStorage.getItem('FLAGX'));
    this.uid=Number(sessionStorage.getItem('UID'))

    // this.returnCount=Number(localStorage.getItem('RETURNCOUNT'));
    // alert(this.returnCount);
    
    //alert(this.flag+this.Flight_Name+this.Flight_Date + this.Origin + this.Destination);

    this.svc.GetFlights1(this.Flight_Name,this.Flight_Date,this.Origin,this.Destination).subscribe((data:FlightInfoModule)=>{
      this.flist=data;
      console.log(this.flist);
      console.log(data);

      if(data[0]==null){
        this.FlagSearch=true;
        console.log("Reached if");
      }
      else{
        this.FlagSearch=false;
        console.log("Reached else");
      }
    });
    console.log(this.flag);
    console.log(this.show);

    if(this.flag==0){
      this.show=false;
    }
    else{
      this.show=true;   //ending
    

    if(this.flagX!=1){
      this.showButton=false;
      alert(this.showButton);
    }
    else{
      this.showButton=true;
      alert(this.showButton);
    }
    
    console.log(this.show);
  //Return
  this.ReturnFlight_Name = String(localStorage.getItem('RETURNFLIGHTNAME'));
    this.ReturnFlight_Date = String(localStorage.getItem('RETURNFLIGHTDATE'));
    this.ReturnOrigin = String(localStorage.getItem('RETURNORIGIN'));
    this.ReturnDestination = String(localStorage.getItem('RETURNDESTINATION'));

    //alert(this.ReturnFlight_Name+this.ReturnFlight_Date + this.ReturnOrigin + this.ReturnDestination );

    this.svc.GetFlights1(this.ReturnFlight_Name,this.ReturnFlight_Date,this.ReturnOrigin,this.ReturnDestination).subscribe((data1:FlightInfoModule)=>{
      if(data1[0]==null){
        console.log("Reached second if")
        this.FlagSearch=true;
      }
      else{
        console.log("Reached second else")
        this.FlagSearch=false;
      }
      this.flist1=data1;
      console.log(this.flist1);
      console.log(data1);
    });
    
  }
  }


  FlightSelect(FlightNo,Cost):void
  {  
    //console.log(FlightNo);
    //console.log(Cost);
    console.log(this.uid);
    if(this.uid==0){
      alert("Please login to continue");
      this.ngzone.run(()=>this.router.navigateByUrl('/UserLogin'));

    }
    else{
    alert(FlightNo+" || "+Cost);
    localStorage.setItem('FLIGHTNUMBER',FlightNo);
    localStorage.setItem('COST',Cost);
    this.flag++;
    localStorage.setItem('FLAG',this.flag.toString());
    //localStorage.setItem('FLAGRETURNFLIGHT',this.flagReturnFlight.toString());
    this.ngzone.run(()=>this.router.navigateByUrl('/SeatSelect'));
    }
  }
}
