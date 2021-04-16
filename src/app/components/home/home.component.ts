import { Component, NgZone, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import {FlightReservationModule} from 'src/app/modules/flight-reservation/flight-reservation.module';
import {FlightReservationService} from 'src/app/services/flight-reservation.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model: any = [];
  svc: FlightReservationService;
  frs1 = new FlightReservationModule();
  ngzone: NgZone;
  router: Router;  

  constructor(svc:FlightReservationService, ngzone:NgZone, router:Router ) 
  { 
    this.svc = svc;
    this.ngzone = ngzone;
    this.router = router;
  }

  ngOnInit(): void {
  }

  oneway: string;
  twoway: string;
  Bookflight(book: NgForm): void 
  {
    this.frs1.Origin = book.value.from;
    this.frs1.Destination = book.value.to;

    
    console.log(book.value);
    if((book.value)!= null)
    {
      this.frs1.Origin = book.value.from;
      this.frs1.Destination = book.value.to;
      alert("Search Successful");
       localStorage.setItem('Origin',this.frs1.Origin);
       localStorage.setItem('Destination', this.frs1.Destination);

      //check if its oneway or return
      // if(this.oneway!=null)
      // {
      //   localStorage.setItem('Origin',this.frs1.Origin);
      //   localStorage.setItem('Destination', this.frs1.Destination);
        
      // }
      // else
      // {
      //   //source
      //   localStorage.setItem('Origin',this.frs1.Origin);
      //   localStorage.setItem('Destination', this.frs1.Destination);
      //   //destination
      //   localStorage.setItem('Origin',this.frs1.Destination);
      //   localStorage.setItem('Destination', this.frs1.Origin);
      // }
      this.ngzone.run(()=>this.router.navigateByUrl('/FlightSelect'));
    }

    else
    {
      alert("Flight Unavailable");
    }

  }

}
