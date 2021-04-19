import { Component, NgZone, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightInfoModule } from 'src/app/modules/flight-info/flight-info.module';
import {FlightReservationModule} from 'src/app/modules/flight-reservation/flight-reservation.module';
import { BookingInfoService } from 'src/app/services/booking-info.service';
import { FlightInfoService } from 'src/app/services/flight-info.service';
import {FlightReservationService} from 'src/app/services/flight-reservation.service';

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

  Searchflight(search: NgForm): void 
  {
     
    this.fi.Flight_Name = search.value.airlines;
    this.fi.Flight_Date = search.value.dd;
    this.fi.Origin = search.value.from;
    this.fi.Destination = search.value.to;
    

    this.fiReturn.Flight_Name = search.value.airlines;
    this.fiReturn.Flight_Date = search.value.rd;
    this.fiReturn.Origin = search.value.to;
    this.fiReturn.Destination = search.value.from;
    

    this.adult=search.value.adult;
    this.child=search.value.child;
    this.infant=search.value.infant;
    this.aci=this.adult+this.child+this.infant;
    if(this.fiReturn.Flight_Date == undefined){
      this.flag=0;
    }
    else{
      this.flag=1;
    }
    console.log("Hello"+this.flag);
    
    // this.svc1.GetFlights(this.fi.Flight_Name,this.fi.Flight_Date,this.fi.Origin,this.fi.Destination).subscribe((data:FlightInfoModule)=>{
    //   this.flist=data;
    //   console.log(this.flist);
    //   console.log(data);
    //   if(this.flist==undefined){
    //     alert("NO Data");
    //   }
    // });



     localStorage.setItem('FLAG',this.flag.toString());
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
    
    // console.log(book.value);
    // if((book.value)!= null)
    // {
    //   this.frs1.Origin = book.value.from;
    //   this.frs1.Destination = book.value.to;
    //   alert("Search Successful");
    //    localStorage.setItem('Origin',this.frs1.Origin);
    //    localStorage.setItem('Destination', this.frs1.Destination);

      //check if its oneway or return
      // if(this.oneway!=null)
      // {
      //   localStorage.setItem('Origin',this.frs1.Origin);
      //   localStorage.setItem('Destination', this.frs1.Destination);
        
      // }
      // else
      // {
      //   //source
         

         
      //   //destination
      //   localStorage.setItem('Origin',this.frs1.Destination);
      //   localStorage.setItem('Destination', this.frs1.Origin);
      // }
      
    // }

    // else
    // {
    //   alert("Flight Unavailable");
    // }

  }

}