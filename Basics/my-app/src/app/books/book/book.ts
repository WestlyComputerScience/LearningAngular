import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor, TitleCasePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // allows us to use two-way binding (ngModel)
import { BookDesign } from '../../Types/book-design';
import { CartService } from '../../services/cart';
// import { EventEmitter } from 'stream'; // <- this was causing an error, don't need this import

@Component({
  selector: 'app-book',
  imports: [FormsModule, NgIf, NgFor, TitleCasePipe, CurrencyPipe],
  standalone: true,
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  @Input() book: BookDesign = {} as BookDesign; // The "as BookDesign" is to avoid "Object is possibly 'undefined'" error

  @Output() emitBook = new EventEmitter<BookDesign>(); // Note: emit book will be used by parent component to recieve change notifications

  isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  addToCart(book: BookDesign): void {
    // this.emitBook.emit(book); // our old emit for console.log testing with communication between books and book components
    this.cartService.add(this.book);
    this.isInCart = true;
  }

  removeFromCart(book: BookDesign): void {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
