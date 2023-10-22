import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private _authenticationService: AuthenticationService, private _router: Router) {
         
    if(localStorage.getItem('dataToken') !== null){
      _router.navigate(['/home'])
    }
   }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,5}$/)]),
  })

  
  apiError: string = ''
  isLoading: boolean = false;



      // ! LogIn Function
  handelLogIn(loginForm: FormGroup) {
    this.isLoading = true;

    this._authenticationService.login(this.loginForm.value).subscribe({

      next: (response) => {

        if (response.message === 'success') {
          localStorage.setItem('dataToken', response.token);
          console.log( response.token);
          this._authenticationService.decodeData()
          this.isLoading = false
          this._router.navigate(['/home'])
        }

      },
      error: (err) => {
        this.apiError = err.error.message
        this.isLoading = false
      }
    })
  }
}
