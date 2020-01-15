import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductOwnerRegisterComponent } from './register/product-owner-register/product-owner-register.component';
import { TesterRegisterComponent } from './register/tester-register/tester-register.component';
import { RegisterComponent } from './register/register/register.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { Ng5SliderModule } from 'ng5-slider';


@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, ProductOwnerRegisterComponent, TesterRegisterComponent, RegisterComponent, ProductsComponent, NavComponent,],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    Ng5SliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
