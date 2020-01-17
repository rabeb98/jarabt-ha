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
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { AngularFireAuthModule } from "@angular/fire/auth";
import {AuthService} from './services/auth.service';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, ProductOwnerRegisterComponent, TesterRegisterComponent, RegisterComponent, ProductsComponent, NavComponent, DashboardComponent, CategoryComponent, SearchComponent, ProductDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
