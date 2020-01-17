import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'myorg-tester-register',
  templateUrl: './tester-register.component.html',
  styleUrls: ['./tester-register.component.css']
})
export class TesterRegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage= '';
  successMessage = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,private firestore: AngularFirestore
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
      .then(res =>{
          this.router.navigate(['/home']);
        }, err => console.log(err)
      )
  }

  tryTwitterLogin(){
    this.authService.doTwitterLogin()
      .then(res =>{
          this.router.navigate(['/home']);
        }, err => console.log(err)
      )
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
      .then(res =>{
          this.router.navigate(['/home']);
        }, err => console.log(err)
      )
  }

  tryRegister(value){
    this.authService.doRegister(value)
      .then(res => {
        const record = {};
        record['type'] = 'tester';
        record['fisrtName'] = value.firstName;
        record['lastName'] =value.lastName;
        record['email'] = value.email;
        record['password'] = value.password;
        this.firestore.collection('users').add(record)
        this.errorMessage = "";
        this.successMessage = "Your account has been created";
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }

  ngOnInit() {
  }











}

