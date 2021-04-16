import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup } from '@angular/forms'
import { ResgisterauModule } from 'src/app/Modules/resgisterau/resgisterau.module'
import { RegisterauService } from 'src/app/Services/registerau.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  model: any = [];
  svc: RegisterauService;
  stud = new ResgisterauModule;
  email: string;
  password: string;
  flag: boolean = false;
  constructor(svc: RegisterauService) { this.svc = svc; }

  ngOnInit(): void {
  }
  EmailVerify: boolean = true;
  Acknowledgement: boolean = false;
  ResetPwd: boolean = false;

  emailChk(EmailVerify: NgForm): void {
    console.log(EmailVerify.value);
    this.stud.EmailID = EmailVerify.value.Email;

    this.svc.ChkEmail(this.stud.EmailID).subscribe((data: string) => {
      console.log(data + " Check email");
      if (data == "success") {
        alert('Email is present in system');
        this.flag = true;
        this.svc.VerifyLinkEmail(this.stud).subscribe((data: string) => {
          if (data == "success") {
            alert('Verification link is sent');
            this.EmailVerify = false;
            this.Acknowledgement = true;
            this.ResetPwd = true;
          }
          else {
            alert('Sending link failed!!');
          }
        });
      }
      else {
        alert('Email ID not found!!');
      }
    });
  }


  ResetPassword(passwordreset: NgForm): void {
    this.stud.OTP = passwordreset.value.otp;
    this.stud.Password = passwordreset.value.pass;
    if (this.stud.Password != passwordreset.value.pass2)
      alert("Password not matching");
    else {
      this.svc.SetNewPassword(this.stud).subscribe((data: boolean) => {
        if (data == true) {
          alert('Password is Updated');
        }
        else {
          alert('Password Updation failed!!');
        }

      });
    }
  }
  
}
