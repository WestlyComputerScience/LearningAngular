import { Injectable } from '@angular/core';
import { BookDesign } from '../Types/book-design';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: BookDesign[] = [];

  constructor() {};

  add(book: BookDesign): void {
    console.log('Adding to cart:', book);
    this.cart.push(book);
  }

  get(): BookDesign[] {
    return this.cart;
  }

  remove(book: BookDesign): void {
    console.log('Removing from cart:', book);
    this.cart = this.cart.filter(b => b !== book);
  }
}

/*
Note: this is in the services folder, which represents global services that can be used across the app
*/