import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {environment} from '../../../environments/environment';
// import * as pathUtils from '../../../shared/utils/path.utils';
// import {AppSettings} from '../../../shared/conf/app-settings';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient, private router: Router) { }
  registerOrganism(productOwner: any) {
    //   this.http.post(environment.SERVER_URL + pathUtils.ORGANISME_REGISTER, productOwner, AppSettings.OPTIONS)
    //     .subscribe(response => {
    //         console.log(response);
    //       },
    //       error1 => console.log(error1));
  }
  //
  registerCoworker(tester: any) {
    //   this.http.post(environment.SERVER_URL + pathUtils.COWORKER_REGISTER, tester, AppSettings.OPTIONS)
    //     .subscribe(response => {
    //         let token = JSON.parse(JSON.stringify(response));
    //         localStorage.setItem('token', token.access_token);
    //         this.router.navigate(['login']);
    //       },
    //       error1 => console.log(error1));
  }
}
