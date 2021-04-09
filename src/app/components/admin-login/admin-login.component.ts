import { Component, OnInit,NgZone } from '@angular/core';
import {FormsModule,NgForm,FormGroup,NgModel} from '@angular/forms';
import{Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  ngzone: NgZone;
  router: Router;
  constructor(ngzone:NgZone, router:Router)
   {
     this.ngzone=ngzone;
    this.router=router; 
  }

  ngOnInit(): void {
  }

  model:any=[]; 

  
  LoginData1(loginForm1:NgForm):void{
    console.log(loginForm1.value);
    if (this.model.admin1=="adminX" && this.model.admin1pass=="pass"){
      alert("Login Successfull");
      this.ngzone.run(()=>this.router.navigateByUrl('/EditFlight'));
    }
    else{
      alert("Login Failed")
    }
  }

  
}
