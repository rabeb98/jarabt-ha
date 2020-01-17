import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'myorg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage= '';
  type = true;
  typeString = 'a Product Owner';

  signinForm: FormGroup;
  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
      .then(res => {
        this.router.navigate(['/home']);
      })
  }

  tryTwitterLogin(){
    this.authService.doTwitterLogin()
      .then(res => {
        this.router.navigate(['/home']);
      })
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
      .then(res => {
        this.router.navigate(['/home']);
      })
  }

  tryLogin(value){
    this.authService.doLogin(value)
      .then(res => {
        this.router.navigate(['dashboard']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })

}


  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'pass': new FormControl(null, Validators.required),
    });
  }


  changeType() {
    if (this.type === true) {
      this.type = false;
      this.typeString = 'a Tester';
    } else if (this.type === false) {
      this.type = true;
      this.typeString = 'a Product Owner';
    }

  }
}
