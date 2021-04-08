import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup, NgModel } from '@angular/forms';
import { RegisterauService } from 'src/app/services/registerau.service';
import { ResgisterauModule } from 'src/app/modules/resgisterau/resgisterau.module';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: any = [];
  svc: RegisterauService;
  fi = new ResgisterauModule();
  data: ResgisterauModule;
  constructor(svc: RegisterauService
  ) {
    this.svc = this.svc;}

  ngOnInit(): void {
    
    
  }
  

  Register(register: NgForm): void {
    console.log(register.value);
    this.fi.Title = register.value.title;
    this.fi.FirstName = register.value.fname;
    this.fi.LastName = register.value.lname;
    this.fi.EmailID = register.value.email;
    this.fi.password = register.value.password;
    this.fi.DOB = register.value.date;
    this.fi.PhoneNumber = register.value.Number;
    this.svc.register(this.fi).subscribe((data: boolean) => {
      alert(data);
      if (data == true) {
        alert('successfully Registered your Account');
      }
    });
  }

}
