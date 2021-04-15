import { Component, OnInit,ViewChild } from '@angular/core';
import {FormsModule,FormGroup,NgForm,NgModel} from '@angular/forms';
import {FlightReservationModule} from 'src/app/modules/flight-reservation/flight-reservation.module';
import {FlightReservationService} from 'src/app/services/flight-reservation.service';
import {FlightInfoModule} from 'src/app/modules/flight-info/flight-info.module';
import {FlightInfoService} from 'src/app/services/flight-info.service';

@Component({
  selector: 'app-flightselect',
  templateUrl: './flightselect.component.html',
  styleUrls: ['./flightselect.component.css']
})
export class FlightselectComponent implements OnInit {
  model : any=[];
  svc : FlightReservationService;
  svc1 : FlightInfoService;
  frm = new FlightReservationModule();
  flist: FlightReservationModule[];

  constructor( svc : FlightReservationService, svc1 : FlightInfoService ) 
  { 
    this.svc=svc;
    this.svc1=svc1;
  }

  ngOnInit(): void {
    this.svc.GetFlights().subscribe((data:FlightReservationModule[])=>{
      this.flist=data;
      });
  }


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

    

  }



}
