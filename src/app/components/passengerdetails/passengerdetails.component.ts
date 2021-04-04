import { Component, OnInit } from '@angular/core';
import {FormsModule,FormGroup,NgForm,NgModel} from '@angular/forms';

@Component({
  selector: 'app-passengerdetails',
  templateUrl: './passengerdetails.component.html',
  styleUrls: ['./passengerdetails.component.css']
})
export class PassengerdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model: any=[];

  PassDet(passdet:NgForm):void{
    console.log(passdet.value);
  }
}
