import { Component, OnInit,ViewChild ,NgZone} from '@angular/core';
import { FormsModule, NgForm, FormGroup, NgModel } from '@angular/forms';

@Component({
  selector: 'app-flightselect',
  templateUrl: './flightselect.component.html',
  styleUrls: ['./flightselect.component.css']
})
export class FlightselectComponent implements OnInit {
 
  constructor() {
   
  }

  ngOnInit(): void {
  }
  model: any = [];
  FlightSelect(flightselect: NgForm): void {
    console.log(flightselect.value);






  }

}
