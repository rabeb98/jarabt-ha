import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
// import {environment} from '../../../environments/environment';
// import * as pathUtils from '../../../shared/utils/path.utils';
// import {AppSettings} from '../../../shared/conf/app-settings';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private coworker;
  private organism;
  private userType;

  constructor(private http: HttpClient, private router: Router) {

  }



  coworkerLogin(body) { // get coworker and put it in local storage
    // this.http.post(environment.SERVER_URL + pathUtils.COWORKER_LOGIN, body, AppSettings.OPTIONS)
    //   .subscribe(response =>{
    //     let token = JSON.parse(JSON.stringify(response));
    //     if( token.access_token != undefined){
    //       localStorage.setItem('token',token.access_token);
    //       this.getCoworker();
    //     }
    //   })
  }

  // get user from backend
  getCoworker(){
    // const token = localStorage.getItem('token');
    // this.http.get(environment.SERVER_URL + pathUtils.COWORKER+'?'+'token='+token,AppSettings.OPTIONS)
    //   .subscribe(res=>{
    //       this.coworker = res;
    //       localStorage.setItem('user', JSON.stringify(this.coworker));
    //       localStorage.setItem('userType', 'coworker');
    //       this.router.navigate(['dashboard']);
    //     },
    //     err=>{
    //       console.log(err)
    //     })
  }

  organismLogin(body) {
    // this.http.post(environment.SERVER_URL + pathUtils.ORGANISATION_LOGIN, body, AppSettings.OPTIONS)
    //   .subscribe(response =>{
    //     let token = JSON.parse(JSON.stringify(response));
    //     if( token.access_token != undefined){
    //       localStorage.setItem('token',token.access_token);
    //       this.getOrganisation();
    //
    //     }
    //   })
  }
  getOrganisation()
  {
    // const token = localStorage.getItem('token');
    // console.log(environment.SERVER_URL + pathUtils.ORGANISATION+'?'+'token='+token);
    // this.http.get(environment.SERVER_URL + pathUtils.ORGANISATION+'?'+'token='+token,AppSettings.OPTIONS)
    //   .subscribe(res=>{
    //       this.organism = res;
    //       localStorage.setItem('user', JSON.stringify(this.organism));
    //       localStorage.setItem('userType', 'organism');
    //       this.router.navigate(['dashboard']);
    //     },
    //     err=>{
    //       console.log(err)
    //     })
  }
  setUserType(userType: string) {
    this.userType = userType;
  }

  getUserType() {
    // return organism or coworker
    return localStorage.getItem('userType');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getUserId() {
    if (this.getUserType() === 'coworker') {
      return this.getUser().id_coworker;
    } else if (this.getUserType() === 'organism') {
      return this.getUser().id_organisation;
    } else if (this.getUserType() === 'admin') {
      return this.getUser().id_admin;
    }
  }
  logout(){
    //   const body = {
    //     "token": localStorage.getItem('token')
    //   }
    //   const userType = this.getUserType();
    //   if( userType == 'coworker'){
    //     this.http.post(environment.SERVER_URL + pathUtils.COWORKER_LOGOUT, body, AppSettings.OPTIONS)
    //       .subscribe(res=>{
    //           console.log('res');
    //           localStorage.removeItem('token');
    //           localStorage.removeItem('user');
    //           localStorage.removeItem('userType');
    //           this.router.navigate(['login']);
    //         },
    //         err=>{
    //           console.log(err)
    //         });
    //   }else if(userType == 'organism'){
    //     this.http.post(environment.SERVER_URL + pathUtils.ORGANISATION_LOGOUT, body, AppSettings.OPTIONS)
    //       .subscribe(res=>{
    //           console.log(res);
    //           localStorage.removeItem('token');
    //           localStorage.removeItem('user');
    //           localStorage.removeItem('userType');
    //           this.router.navigate(['login']);
    //         },
    //         err=>{
    //           console.log(err)
    //         });
    //   }
  }
}
