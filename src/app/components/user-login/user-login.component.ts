import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup,NgModel} from '@angular/forms';

import{RegisterauService}from 'src/app/services/registerau.service';
import{ResgisterauModule} from 'src/app/modules/resgisterau/resgisterau.module';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  svc: RegisterauService;
  regau =new ResgisterauModule();

  constructor(svc:RegisterauService ) 
  { this.svc= svc }

  ngOnInit(): void {
  }
  model:any=[]; 

  LoginData(loginForm:NgForm):void
  {
    this.regau.adminname=loginForm.value.adminname; 
    this.regau.password= loginForm.value.txtpass;
  
  this.svc.Login(this.regau.adminname,this.regau.password).subscribe((data:string)=>
  {
    console.log(data);
    if(data=="Login Successful")
    {
      alert("Login successful");
    }
    else{
      alert("Invalid Credentials");
    }
    //console.log(loginForm.value);
  });
}
}
