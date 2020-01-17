import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'myorg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type = true;
  typeString = 'a Product Owner';

  signinForm: FormGroup;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'pass': new FormControl(null, Validators.required),
    });
  }
  signin(){
    this.authService.signIn(this.signinForm.value.email, this.signinForm.value.pass);
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
