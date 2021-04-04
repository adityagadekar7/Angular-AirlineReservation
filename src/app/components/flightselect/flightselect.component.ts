import { Component, OnInit,ViewChild } from '@angular/core';
import {FormsModule,FormGroup,NgForm,NgModel} from '@angular/forms';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-flightselect',
  templateUrl: './flightselect.component.html',
  styleUrls: ['./flightselect.component.css']
})
export class FlightselectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model: any=[];

  FlightSelect(flightselect:NgForm):void{
    console.log(flightselect.value);
  }



}
