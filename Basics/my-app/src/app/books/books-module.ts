import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { Books } from './books';
import { Book } from './book/book';

@NgModule({ // this model is dedicated to the books feature
  declarations: [],
  providers: [BooksService],
  imports: [
    CommonModule,
    Books,
    Book
  ],
  exports: [Books]
})
export class BooksModule { }
