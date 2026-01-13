import { Component } from '@angular/core';
import { NgIf, NgFor, TitleCasePipe, CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart';
import { BookDesign } from '../Types/book-design';

@Component({
  selector: 'app-cart',
  imports: [NgIf, NgFor, TitleCasePipe, CurrencyPipe],
  standalone: true,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  constructor(private cartService: CartService) {}

  getCart(): BookDesign[] {
    return this.cartService.get();
  }

}
