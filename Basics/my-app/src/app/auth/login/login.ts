import { Component } from '@angular/core';
import { LoginForm } from '../../Types/Auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  form: LoginForm = { // better way to go about containing the information
    email: '',
    password: ''
  }

  onSubmit() {
    alert(this.form.email + ' ' + this.form.password);
  }
}
