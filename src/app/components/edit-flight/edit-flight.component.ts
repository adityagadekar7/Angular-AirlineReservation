import { Component, OnInit,ViewChild } from '@angular/core';
import {FormsModule,NgForm,FormGroup,NgModel} from '@angular/forms';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
import{FlightInfoService}from 'src/app/services/flight-info.service';
import{FlightInfoModule} from 'src/app/modules/flight-info/flight-info.module';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { CityInfoModule } from 'src/app/modules/city-info/city-info.module';
import { CityInfoService } from 'src/app/services/city-info.service';


@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent implements OnInit {

  svc:FlightInfoService;
  fi=new FlightInfoModule();
  svc1:CityInfoService;
  clist:CityInfoModule[];
  data:FlightInfoModule; // for delete
  model:any=[]; 

  constructor(svc:FlightInfoService,svc1:CityInfoService) 
  {
    this.svc=svc;
    this.svc1=svc1;
   }

  ngOnInit(): void 
  {
    this.svc1.GetCity().subscribe((data:CityInfoModule[])=>{
      this.clist=data;
      });
  }

  FlightData(addFlightForm:NgForm):void{
    console.log(addFlightForm.value);
    this.fi.Flight_Number=addFlightForm.value.Flight_Number; 
    this.fi.Flight_Name=addFlightForm.value.Flight_Name; 
    this.fi.Flight_Date=addFlightForm.value.Flight_Date; 
    this.fi.Airport_Code=addFlightForm.value.Airport_Code; 
    this.fi.Flight_Departing_Time=addFlightForm.value.Flight_Departing_Time; 
    this.fi.Flight_Arrival_Time=addFlightForm.value.Flight_Arrival_Time; 
    this.fi.Origin=addFlightForm.value.Origin; 
    this.fi.Destination=addFlightForm.value.Destination; 
    this.fi.Flight_Status=addFlightForm.value.Flight_Status; 
    this.fi.Cost_Eco=addFlightForm.value.Cost_Eco; 
    this.fi.Cost_Business=addFlightForm.value.Cost_Business; 
    this.fi.Seats_Available_Eco=addFlightForm.value.Seats_Available_Eco; 
    this.fi.Seats_Available_Business=addFlightForm.value.Seats_Available_Business;
    
    this.svc.InsertNewFlight(this.fi).subscribe((data:boolean)=>{
      alert(data);
      if(data == true){
        alert('New Flight Added');
      }
    });
  }


  DeleteFunction(deleteForm:NgForm):void{
    this.fi.Flight_Number=deleteForm.value.fno;
    this.svc.DeleteFlightF(this.fi.Flight_Number).subscribe((data:boolean)=>{
      alert(data);
      console.log(data);
    });
  }


  //Tabs
  @ViewChild('tabset') tabset: TabsetComponent;

  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }

}
