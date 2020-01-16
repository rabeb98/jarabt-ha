import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { HomeComponent } from './home/home.component';
import {RegisterComponent} from './register/register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {CategoryComponent} from './category/category.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: 'products', component: ProductsComponent, },
  {path: 'products/:category', component: CategoryComponent, },
  {path: 'home', component: HomeComponent,},
  {path: 'home', component: HomeComponent,},
  {path: '', component: HomeComponent,},
  {path: 'register', component: RegisterComponent,},
  {path: 'login', component: LoginComponent,},
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},

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
