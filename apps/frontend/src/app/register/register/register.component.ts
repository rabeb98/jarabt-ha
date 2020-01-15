import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  type = true;
  typeString = 'a Product Owner';
  constructor() {
  }
  changeType(type: string) {
    if (this.type === true ) {
      this.type = false;
      this.typeString = 'a Tester';
    }
    else if (this.type ===false ) {
      this.type = true;
      this.typeString = 'a Product Owner';
    }

  }

  ngOnInit() {
  }

}
