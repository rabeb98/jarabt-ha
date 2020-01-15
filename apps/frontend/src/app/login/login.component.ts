import { Component, OnInit } from '@angular/core';
// import {LoginService} from '../services/login.service';


@Component({
  selector: 'myorg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type = true;
  typeString = 'a Product Owner';

  constructor(
    // private loginService: LoginService
  ) {
  }

  ngOnInit() {
    //this.router.navigate(['dashboard']);
  }

  onSignin(form: any) {
    // if (this.type) {
    //   let body={
    //     'email':form.value.email,
    //     'password': form.value.password
    //   }
    //   this.loginService.coworkerLogin(body);
    // } else if (!this.type) {
    //   let body={
    //     'email': form.value.email,
    //     'password': form.value.password
    //   }
    //   this.loginService.organismLogin(body);
    // }
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
