import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component'
import {StarRatingModule} from 'angular-star-rating';
@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, RatingComponent,],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    StarRatingModule.forRoot() ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
