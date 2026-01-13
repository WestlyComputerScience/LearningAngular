import { Injectable } from '@angular/core';

@Injectable({ // aka, we can use this service from the service container throughout the app, called a "dependency injection"
  providedIn: 'root',
})
export class BooksService {
  
  // constructor(name: Name) {} // example of our injectable also using classes 

  constructor() {}

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C. Martin',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg',
        amount: 12.99,
      },
      {
        name: 'The Pragmatic Programmer',
        author: 'Andrew Hunt and David Thomas',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg',
        amount: 30.99,
      },
      {
        name: 'Art of Computer Programming',
        author: 'Donald John Fuller',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51F-hgkixlL._SX342_SY445_QL70_ML2_.jpg',
        amount: 190.00,
      },
      {
        name: 'Introduction to Algorithms',
        author: 'Thomas H. Cormen',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg',
        amount: 99.95,
      }
    ];
  }
}

// class Name {
//   constructor(name: string){
//     console.log(name);
//   }
// }