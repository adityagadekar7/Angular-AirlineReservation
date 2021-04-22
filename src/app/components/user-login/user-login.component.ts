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
  dataEmail:ResgisterauModule;
  dataEmailX:ResgisterauModule[];
  UserDetails=new ResgisterauModule();
  userx:number;
 
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
    //this.regau.UserId=loginForm.value.uid;
    this.regau.EmailID=loginForm.value.email; 
    this.regau.Password= loginForm.value.txtpass;
  
  this.svc.Login(this.regau.EmailID,this.regau.Password).subscribe((data:any)=>
  {
    console.log(data);
    if(data=="Login Successful")
    {
      this.svc.GetIdByEmail(this.regau.EmailID).subscribe((dataEmail:ResgisterauModule[])=>{
        console.log(dataEmail);
        this.dataEmailX=dataEmail
        console.log(this.dataEmailX);
        console.log(this.dataEmailX[0].User_Id);
        localStorage.setItem('UID',this.dataEmailX[0].User_Id.toString());
        sessionStorage.setItem('UID',this.dataEmailX[0].User_Id.toString());
        sessionStorage.setItem('FIRSTNAME',this.dataEmailX[0].FirstName);
        sessionStorage.setItem('LASTNAME',this.dataEmailX[0].LastName);
        console.log(sessionStorage.length);
        
        this.svc.loginstatus.next(true); 
      });
      alert("Login Successful");
      this.ngzone.run(()=>this.router.navigateByUrl('/homepage'));
    }
    else{
      alert("Invalid Credentials");
    }
    //console.log(loginForm.value);
  });

  
}
}
