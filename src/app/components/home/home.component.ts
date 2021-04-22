import { Component, NgZone, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightInfoModule } from 'src/app/modules/flight-info/flight-info.module';
import { BookingInfoService } from 'src/app/services/booking-info.service';
import { FlightInfoService } from 'src/app/services/flight-info.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textBoxDisabled = true;
  model: any = [];
  svc:FlightInfoService;
  svc1:BookingInfoService;
  fi= new FlightInfoModule();
  fiReturn= new FlightInfoModule();
  ngzone: NgZone;
  router: Router; 
  flag:number=0;
  adult:number;
  child:number;
  infant:number;
  aci:number;
  flist= new FlightInfoModule();
  FirstName:string;
  LastName:string;
  CurrentDate:Date;
  SelectedDate:Date;
  SelectedReturnDate:Date;
 
  constructor(svc:FlightInfoService, svc1:BookingInfoService, ngzone:NgZone, router:Router ) 
  { 
    this.svc = svc;
    this.svc1=svc1;
    this.ngzone = ngzone;
    this.router = router;
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  SearchFunction(){
    
    console.log("Hello"+this.flag);
    localStorage.setItem('FLAG',this.flag.toString());    //flag assigned to local storage for return flight if 1 then return flight required
     localStorage.setItem('FLIGHTNAME',this.fi.Flight_Name);
     localStorage.setItem('FLIGHTDATE', this.fi.Flight_Date);
     localStorage.setItem('ORIGIN',this.fi.Origin);
     localStorage.setItem('DESTINATION', this.fi.Destination);
     localStorage.setItem('RETURNFLIGHTNAME',this.fiReturn.Flight_Name);
     localStorage.setItem('RETURNFLIGHTDATE', this.fiReturn.Flight_Date);
     localStorage.setItem('RETURNORIGIN',this.fiReturn.Origin);
     localStorage.setItem('RETURNDESTINATION', this.fiReturn.Destination);
     localStorage.setItem('ADULT',this.adult.toString());
     localStorage.setItem('CHILD',this.child.toString());
     localStorage.setItem('INFANT',this.infant.toString());
     localStorage.setItem('ACI',this.aci.toString());
     this.ngzone.run(()=>this.router.navigateByUrl('/FlightSelect'));
  }
  
  //To Search Flights
  Searchflight(search: NgForm): void 
  {
    
    this.fi.Flight_Name = search.value.airlines;
    this.fi.Flight_Date = search.value.dd;
    this.fi.Origin = search.value.from;
    this.fi.Destination = search.value.to;
    
    //For Return Flight Details
    this.fiReturn.Flight_Name = search.value.airlines;
    this.fiReturn.Flight_Date = search.value.rd;
    this.fiReturn.Origin = search.value.to;
    this.fiReturn.Destination = search.value.from;
    
    //Passenger Count
    this.adult=search.value.adult;
    this.child=search.value.child;
    this.infant=search.value.infant;
    this.aci=this.adult+this.child+this.infant;

    this.CurrentDate=new Date();
    this.SelectedDate=new Date(this.fi.Flight_Date)
    this.SelectedReturnDate=new Date(this.fiReturn.Flight_Date);

    if(this.SelectedDate>=this.CurrentDate)
    {
      //Check Count of Passenger
      if(this.adult>0 && this.infant>=0 && this.child>=0)
      {
        if(this.adult>=this.infant)
        {
          if(this.fiReturn.Flight_Date == undefined){   //Setup for Return flight Details --if date not entered then 0 
            this.flag=0;
            this.SearchFunction();
          }
          else
          {
            this.flag=1;
            if(this.SelectedReturnDate>=this.SelectedDate)
            {
              this.SearchFunction();
            }
            else{
              alert("Select Correct Return Flight Date");
            }
          } 
        }
        else
        {
          alert("Count of Adults should be greater than that of Infants");
        }
      }
      else
      {
        alert("Enter Valid Number of Passengers");
      } 
    }
    else
    {
      alert("Select Correct Date")
    } 
  }
}