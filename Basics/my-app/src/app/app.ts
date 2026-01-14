import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Books } from './books/books';
import { Cart } from "./cart/cart";
import { AuthModule } from './auth/auth-module';
import { firebaseConfig } from './firebase.config';
import { initializeApp } from 'firebase/app';

@Component({ // this is the metadata for the component
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Books, Cart, AuthModule], // N0te we need to import here!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit { // this is the meat of the component
  protected readonly title = signal('my-app');
  
  ngOnInit(): void {
    initializeApp(firebaseConfig); // Initialize Firebase app
  }
}

// ng --help for commands
