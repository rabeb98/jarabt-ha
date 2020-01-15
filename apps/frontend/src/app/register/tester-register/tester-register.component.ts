import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'myorg-tester-register',
  templateUrl: './tester-register.component.html',
  styleUrls: ['./tester-register.component.css']
})
export class TesterRegisterComponent implements OnInit {

  tester;
  error = '';

  ngOnInit() {
    // this.tester = new tester();
  }
  constructor(private registerService: RegisterService) {
  }
  onSignup(form: any) {
    if (form.value.password !== form.value.passwordVerif) {
      this.error = 'password doesn\'t match';
      return;
    }
    console.log('tester register');
    // this.tester.FirstName = form.value.FirstName;
    // this.tester.LastName = form.value.LastName;
    // this.tester.interest = form.value.interest;
    // this.tester.DateBirth = form.value.DateBirth;
    // this.tester.email = form.value.email;
    // this.tester.establishment = form.value.establishment;
    // this.tester.phone = form.value.phone;
    // this.tester.profession = form.value.profession;
    // this.tester.password = form.value.password;
    this.registerService.registerCoworker(this.tester);
  }

}
