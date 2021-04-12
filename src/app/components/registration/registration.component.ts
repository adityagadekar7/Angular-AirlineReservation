import { Component, OnInit,NgZone } from '@angular/core';
import { FormsModule, NgForm, FormGroup, NgModel } from '@angular/forms';
import { RegisterauService } from 'src/app/services/registerau.service';
import { ResgisterauModule } from 'src/app/modules/resgisterau/resgisterau.module';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: any = [];
  svc: RegisterauService;
  regm = new ResgisterauModule();
  data: ResgisterauModule;
  ngzone: NgZone;
  router: Router;
  constructor(svc: RegisterauService, ngzone: NgZone, router: Router) {
    this.svc = svc;
    this.ngzone = ngzone;
    this.router = router;}

  ngOnInit(): void {
  }
  

  Register(registerForm: NgForm): void {
    console.log(registerForm.value);
    //this.regm.Title = "Mr";
    this.regm.Title = registerForm.value.title;
   // this.regm.Title = registerForm.value.mrs;
    this.regm.FirstName = registerForm.value.fname;
    this.regm.LastName = registerForm.value.lname;
    this.regm.EmailID = registerForm.value.email;
    this.regm.Password = registerForm.value.pwd;
    this.regm.DOB = registerForm.value.dob;
    this.regm.PhoneNumber = registerForm.value.pno;
    
    console.log(this.regm);

    this.svc.UserReg(this.regm).subscribe((data: boolean) => {
      alert(data);
      if (data == true) {
        alert('successfully Registered your Account');
        this.ngzone.run(() => this.router.navigateByUrl('/homepage'));
      }
    });
  }

}
