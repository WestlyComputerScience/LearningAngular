import { Routes } from '@angular/router';
import { Books } from './books/books';
import { Cart } from './cart/cart';
import { RegisterComponent } from './auth/register/register';
import { LoginComponent } from './auth/login/login';

export const routes: Routes = [
  { path: '', component: Books },
  { path: 'cart', component: Cart },
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent }
];

// this works?