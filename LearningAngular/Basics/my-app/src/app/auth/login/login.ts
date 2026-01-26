import { Component } from '@angular/core';
import { LoginForm } from '../../Types/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('User signed in:', user);
        alert('Login successful!');
        // You can redirect or update UI here
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login error:', errorCode, errorMessage);
        alert('Login failed: ' + errorMessage);
      });
  }
}
