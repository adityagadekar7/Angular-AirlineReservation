<<<<<<< HEAD

=======
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b
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
<<<<<<< HEAD
  svc: FlightReservationService;
  svc1: FlightInfoService;
  frm = new FlightReservationModule();
  flist: FlightReservationModule[];

  Origin: string;
  Destination: string;

  oneway: string;
  twoway: string;
  
  buttonName1:string;

  OneWayFlight(){
    this.buttonName1="OneWayFlight";
  }
=======
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

  ReturnOrigin: string;
  ReturnDestination: string;
  ReturnFlight_Name: string;
  ReturnFlight_Date: string;
  ngzone: NgZone;
  router: Router;  

  constructor(svc: BookingInfoService, svc1: FlightInfoService,  ngzone:NgZone, router:Router) {
    this.svc = svc;
    this.svc1 = svc1;
    this.ngzone = ngzone;
    this.router = router; }
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b


  constructor(svc: FlightReservationService, svc1: FlightInfoService) {
    this.svc = svc;
    this.svc1 = svc1; }

  ngOnInit(): void {
<<<<<<< HEAD
    this.Origin = String(localStorage.getItem('Origin'));
    this.Destination = String(localStorage.getItem('Destination'));
    alert("Origin: " + this.Origin + "Destination: " + this.Destination);
=======
    this.Flight_Name = String(localStorage.getItem('FLIGHTNAME'));
    this.Flight_Date = String(localStorage.getItem('FLIGHTDATE'));
    this.Origin = String(localStorage.getItem('ORIGIN'));
    this.Destination = String(localStorage.getItem('DESTINATION'));
    this.flag=Number(localStorage.getItem('FLAG'));
    this.flagX=Number(localStorage.getItem('FLAGX'));
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b

    // this.returnCount=Number(localStorage.getItem('RETURNCOUNT'));
    // alert(this.returnCount);
    
    //alert(this.flag+this.Flight_Name+this.Flight_Date + this.Origin + this.Destination);

<<<<<<< HEAD
    this.svc.GetFlights().subscribe((data: FlightReservationModule[]) => {
      this.flist = data;
      console.log(this.flist);
    });
  }
=======
    this.svc.GetFlights(this.Flight_Name,this.Flight_Date,this.Origin,this.Destination).subscribe((data:FlightInfoModule)=>{
      this.flist=data;
      console.log(this.flist);
      console.log(data);
    });
    console.log(this.flag)
    console.log(this.show);
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b

    if(this.flag==0){
      this.show=false;
    }
    else{
      this.show=true;
    }

<<<<<<< HEAD
  FlightSelect(flightselect:NgForm):void
  {
    console.log(flightselect.value);
    this.frm.Flight_Number = flightselect.value.id;
    
    this.frm.Flight_Number=flightselect.value.Flight_Number; 
    this.frm.Flight_Name=flightselect.value.Flight_Name; 
    this.frm.Flight_Date=flightselect.value.Flight_Date; 
    this.frm.Airport_Code=flightselect.value.Airport_Code; 
    this.frm.Flight_Departing_Time=flightselect.value.Flight_Departing_Time; 
    this.frm.Flight_Arrival_Time=flightselect.value.Flight_Arrival_Time; 
    this.frm.Origin=flightselect.value.Origin; 
    this.frm.Destination=flightselect.value.Destination; 
    this.frm.Flight_Status=flightselect.value.Flight_Status; 
    this.frm.Cost_Eco=flightselect.value.Cost_Eco; 
    this.frm.Cost_Business=flightselect.value.Cost_Business; 
    this.frm.Seats_Available_Eco=flightselect.value.Seats_Available_Eco; 
    this.frm.Seats_Available_Business=flightselect.value.Seats_Available_Business;

    
=======
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
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b

    this.svc.GetFlights(this.ReturnFlight_Name,this.ReturnFlight_Date,this.ReturnOrigin,this.ReturnDestination).subscribe((data1:FlightInfoModule)=>{
      this.flist1=data1;
      console.log(this.flist1);
      console.log(data1);
    });    
  }
<<<<<<< HEAD
=======


  FlightSelect(FlightNo,Cost):void
  {  
    //console.log(FlightNo);
    //console.log(Cost);
    alert(FlightNo+" || "+Cost);
    localStorage.setItem('FLIGHTNUMBER',FlightNo);
    localStorage.setItem('COST',Cost);
    this.flag++;
    localStorage.setItem('FLAG',this.flag.toString());
    //localStorage.setItem('FLAGRETURNFLIGHT',this.flagReturnFlight.toString());
    this.ngzone.run(()=>this.router.navigateByUrl('/SeatSelect'));
  }
>>>>>>> 25bf8504612467404ab0a7e5c14c5722e3fbb88b
}
