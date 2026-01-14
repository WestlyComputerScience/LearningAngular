import { Component } from '@angular/core';
import { RegisterForm } from '../../Types/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
    form: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  passwordMatched: boolean = true;

  onSubmit() {
    if(this.form.password !== this.form.confirmPassword) {
        alert("Passwords do not match!");
        this.passwordMatched = false;
        return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    alert(this.form.email + ' ' + this.form.password);
  }
}
