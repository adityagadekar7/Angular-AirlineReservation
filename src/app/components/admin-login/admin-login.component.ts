import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup,NgModel} from '@angular/forms';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model:any=[]; 

  
  LoginData1(loginForm1:NgForm):void{
    console.log(loginForm1.value);
  }

  
}
