import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup,NgModel} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model:any=[]; 

  
  PaymentForm(paymentform:NgForm):void{
    console.log(paymentform.value);
  }
}
