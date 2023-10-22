import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForgetpassService } from '../service/forgetpass.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  constructor(
    private _forgetpassService: ForgetpassService,
    private _toastrService: ToastrService,
    private _router: Router,

  ) { }
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  email: string = ''
  code: string = ''
  userMsg = ''
  // ^ Forms
  forgetForm: FormGroup = new FormGroup({
    email: new FormControl('')
  })

  verifyCode: FormGroup = new FormGroup({
    resetCode: new FormControl('')
  })

  resetPass: FormGroup = new FormGroup({
    newPassword: new FormControl('')
  })


  forgetPass() {
    let userEmail = this.forgetForm.value
    this.email = userEmail.email

    this._forgetpassService.forgetPass(userEmail).subscribe({
      next: (response) => {

        this._toastrService.success(response.message)
        this.step1 = false;
        this.step2 = true
      },
      error: (err) => {
        this._toastrService.error(err.error.message)
      }
    })
  }

  getverifyCode() {
    let resetCode = this.verifyCode.value
    this._forgetpassService.getverifyCode(resetCode).subscribe({
      next: (response) => {        
        this._toastrService.success(response.status)
        this.step2 = false
        this.step3 = true
      },
      error: (err) => {
        this._toastrService.error(err.error.message)
      }
    })
  }


  reset() {
    let newPassword = this.resetPass.value
    newPassword.email= this.email
    this._forgetpassService.reset(newPassword).subscribe({
      next: (response) => {
        if(response.token){
          localStorage.setItem('dataToken',response.token)
          this._router.navigate([`/home`])
        }

      },
      error: (err) => {
        this._toastrService.error(err.error.message)
      }
    })
  }
}
