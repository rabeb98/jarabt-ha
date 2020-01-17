import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'myorg-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  title = 'testerrr';
  Categories : string[] = ["informatique","telephonie","electromenager","gaming","bureautique","impresssion"];
  session=true;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  onLogout(){
    this.authService.logout();
  }
  //Check use is logged in
  checkUserLoggedIn(){
    console.log(localStorage);
    return !!localStorage.getItem('isLoggedIn');
  }

}
