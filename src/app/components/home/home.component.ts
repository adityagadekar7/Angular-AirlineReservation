import { Component, NgZone, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightInfoModule } from 'src/app/modules/flight-info/flight-info.module';
import {FlightReservationModule} from 'src/app/modules/flight-reservation/flight-reservation.module';
import { FlightInfoService } from 'src/app/services/flight-info.service';
import {FlightReservationService} from 'src/app/services/flight-reservation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: any = [];
  svc:FlightInfoService;
  fi= new FlightInfoModule();
  fiReturn= new FlightInfoModule();
  ngzone: NgZone;
  router: Router; 
  flag:number=0;


  constructor(svc:FlightInfoService, ngzone:NgZone, router:Router ) 
  { 
    this.svc = svc;
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
    
    if(this.fiReturn.Flight_Date == undefined){
      this.flag=0;
    }
    else{
      this.flag=1;
    }
    console.log("Hello"+this.flag);
    
     localStorage.setItem('FLAG',this.flag.toString());
      localStorage.setItem('FLIGHTNAME',this.fi.Flight_Name);
      localStorage.setItem('FLIGHTDATE', this.fi.Flight_Date);
      localStorage.setItem('ORIGIN',this.fi.Origin);
      localStorage.setItem('DESTINATION', this.fi.Destination);
      localStorage.setItem('RETURNFLIGHTNAME',this.fiReturn.Flight_Name);
      localStorage.setItem('RETURNFLIGHTDATE', this.fiReturn.Flight_Date);
      localStorage.setItem('RETURNORIGIN',this.fiReturn.Origin);
      localStorage.setItem('RETURNDESTINATION', this.fiReturn.Destination);
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