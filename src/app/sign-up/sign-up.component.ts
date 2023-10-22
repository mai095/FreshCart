import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlOptions } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private _authenticationService: AuthenticationService, private _router: Router) {
    if (localStorage.getItem('dataToken') !== null) {
      _router.navigate(['/home'])
    }
  }
  isLoading: boolean = false;
  apiError: string = ''



  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]),
    rePassword: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  },
{  validators : [this.confirmPass]} as FormControlOptions
  );

  confirmPass(group: FormGroup):void {
    const password = group.get('password')
    const rePassword = group.get('rePassword')

    if (rePassword?.value == '') {
      rePassword.setErrors({ required: true })
    } else if (password?.value != rePassword?.value) {
      rePassword?.setErrors({ misMatch: true })
     

    }
  }





  handleRegisterForm(registerForm: FormGroup) {
    this.isLoading = true
    this._authenticationService.register(registerForm.value).subscribe({

      next: (response) => {
        if (response.message === 'success') {
          this.isLoading = false;
          this._router.navigate(['/login'])
        }
      },

      error: (err) => {
        this.isLoading = false;
        this.apiError = err.error.message;
      },

    });



  }

}
