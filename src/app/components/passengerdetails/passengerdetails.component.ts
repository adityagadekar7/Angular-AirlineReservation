import { Component, OnInit,NgModule } from '@angular/core';
import {FormsModule,FormGroup,NgForm,NgModel} from '@angular/forms';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import{PassengerInfoService}from 'src/app/services/passenger-info.service';
import{PassengerInfoModule} from 'src/app/modules/passenger-info/passenger-info.module';

@Component({
  selector: 'app-passengerdetails',
  templateUrl: './passengerdetails.component.html',
  styleUrls: ['./passengerdetails.component.css']
})
export class PassengerdetailsComponent implements OnInit {

  svc : PassengerInfoService;
  pi = new PassengerInfoModule();
  data : PassengerInfoModule; // for delete
  model:any=[];

  constructor(svc : PassengerInfoService) 
  {
    this.svc = svc;
  }

  ngOnInit(): void {
  }

  PassDet(passdet:NgForm):void{
   // console.log(passdet.value);
    this.pi.Passenger_id = passdet.value.Passenger_id;
    this.pi.Pnr_no = passdet.value.Pnr_no;
    this.pi.PassportNumber = passdet.value.Passport_Number;
    this.pi.FirstName =  passdet.value.FirstName;
    this.pi.LastName =  passdet.value.LastName;
    this.pi.DOB =  passdet.value.DOB;
    this.pi.Gender =  passdet.value.gen;
    this.pi.PhoneNumber =  passdet.value.PhoneNumber;
    this.pi.CovidCertificate =  passdet.value.cc;

    this.svc.InsertNewPassenger(this.pi).subscribe((data:boolean)=>
    {
      console.log(data);
      if(data == true)
      {
        alert("New Passenger Added");
      }
      else
      {
        alert("Enter details");
      }
    });

  }

  /*DeleteFunction(deleteForm:NgForm):void{
    this.pi.Passenger_id=deleteForm.value.Passenger_id;
    this.svc.DeletePassenger(this.pi.Passenger_id).subscribe((data:boolean)=>
    {
      //alert(data);
      console.log(data);
      if(data==true)
      {
        alert('Delete successful');
        location.reload();
      }
      else
      {
        alert('Delete unsuccessful');
      }
    });
  }*/

}
