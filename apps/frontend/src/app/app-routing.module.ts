import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { HomeComponent } from './home/home.component';
import {RegisterComponent} from './register/register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent, },
  {path: 'home', component: HomeComponent,},
  {path: '', component: HomeComponent,},
  {path: 'register', component: RegisterComponent,},
  {path: 'login', component: LoginComponent,}

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }
