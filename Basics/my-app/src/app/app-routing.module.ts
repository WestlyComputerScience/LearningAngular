import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Books } from './books/books';
import { Cart } from './cart/cart';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';

const routes: Routes = [
    {path: '', component: Books},
    {path: 'cart', component: Cart},
    { path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { 

}


// doesn't work?