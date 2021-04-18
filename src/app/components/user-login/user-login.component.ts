import { Component, OnInit,NgZone } from '@angular/core';
import{Router} from '@angular/router';
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
  model:any=[]; 
  ngzone: NgZone;
  router: Router;
 
  
  constructor(svc:RegisterauService, ngzone:NgZone, router:Router ) 
  { 
    this.svc= svc;
    this.ngzone=ngzone;
    this.router=router;
    
   }

  ngOnInit(): void {
  }
  

  LoginData(loginForm:NgForm):void
  {
    this.regau.UserId=loginForm.value.uid; 
    this.regau.Password= loginForm.value.txtpass;
  
  this.svc.Login(this.regau.UserId,this.regau.Password).subscribe((data:any)=>
  {
    
    console.log(data);
    if(data=="Login Successful")
    {
      alert("Login Successful");
      
      localStorage.setItem('UID',this.regau.UserId.toString());
      

      sessionStorage.setItem('UID',this.regau.UserId.toString());
      console.log(sessionStorage.length);
      this.ngzone.run(()=>this.router.navigateByUrl('/homepage'));
      this.svc.loginstatus.next(true);
      

    }
    else{
      alert("Invalid Credentials");
    }
    //console.log(loginForm.value);
  });
}
}
