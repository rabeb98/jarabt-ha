import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register.service';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'myorg-product-owner-register',
  templateUrl: './product-owner-register.component.html',
  styleUrls: ['./product-owner-register.component.css']
})
export class ProductOwnerRegisterComponent implements OnInit {
  type='owner';
  signupForm: FormGroup;
  constructor(private authService: AuthService,
              private router: Router) {
  }


  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'pass': new FormControl(null, Validators.required),

    });}
  signup(){
    this.authService.signUp(this.signupForm.value.email, this.signupForm.value.pass);
    this.router.navigate(['/login']);
  }

}
