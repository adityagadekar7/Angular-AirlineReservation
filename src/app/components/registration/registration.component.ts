import { Component, OnInit,NgZone } from '@angular/core';
import { FormsModule, NgForm, FormGroup, FormBuilder,Validators, NgModel } from '@angular/forms';
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
  siteKey: string;
  protected aFormGroup: FormGroup;

  constructor(svc: RegisterauService, ngzone: NgZone, router: Router) {
    this.svc = svc;
    this.ngzone = ngzone;
    this.router = router;
    this.siteKey = "6LfAt6kaAAAAAAKVbZwiLK3jorZWCvkluCojg_xj";  //key Generated by  google captcha of version-2
  }

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
    this.svc.ChkEmail(this.regm.EmailID).subscribe((data: string) => {
      if (data == "success") {
        alert("Email ID already in use. Please use another ID");
      }

      else {
        this.svc.UserReg(this.regm).subscribe((data: boolean) => {

          if (data == true) {
            alert('successfully Registered your Account you will be redirected to Main page');
            this.ngzone.run(() => this.router.navigateByUrl('/homepage'));
          }
        });

      }
    });
  }
}
