import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, TitleCasePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // allows us to use two-way binding (ngModel)
import { Book } from './book/book';
import { BookDesign } from '../Types/book-design';

@Component({
  selector: 'app-books',
  imports: [FormsModule, NgIf, NgFor, TitleCasePipe, CurrencyPipe, Book],
  templateUrl: './books.html',
  styleUrls: ['./books.css'],
})
export class Books implements OnInit {

  books: BookDesign[] = [
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

  isHidden: boolean = false;

  isShowing: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleHidden(): void { // toggles list of books visibility
    this.isHidden = !this.isHidden;
  }

  myName: string = ''; // done on it's own by two-way binding

  handleInput(event: any): void { // updates myName based on user input
    this.myName = event.target.value;
  }

  cart: BookDesign[] = []; // array to hold books added to cart

  addToCart(book: BookDesign): void { // adds book to cart array
    console.log('Adding to cart:', book);
  }
}

// ========================= NOTES ========================= //

/*
PROPERTY BINDING:
 - Helps set values for properties of HTML elements or directives
 - Use property binding for things like toglle button functionality, set paths programmatically, and share values between components
 - Syntax: [property]="value"
*/

/*
EVENT BINDING:
 - Lets you listen for and respond to user actions like clicks, key presses, and mouse movements
 - Syntax: (event)="handler"
*/

/*
TWO-WAY BINDING:
 - Gives components in your application a way to share data in both directions
 - Use it to listen for events and update values simultaneously between parent and child components
 - Syntax: [(ngModel)]="property"
*/

/*
DIRECTIVES:
 - classes that add additional behavior to elements in your Angular applications
 - Can be used to modify the appearance, behavior, or layout of elements
 - Three types: components, structural directives, and attribute directives
   - Components: directives with a template (e.g., app-books)
   - Structural Directives: change the DOM layout by adding, removing, or manipulating elements (e.g., *ngIf, *ngFor, *ngSwitch)
      - *ngIf: conditionally includes a template based on the value of an expression
      - *ngFor: instantiates a template once per item from an iterable
      - *ngSwitch: adds or removes elements based on a switch expression
   - Attribute Directives: change the appearance or behavior of an element, component, or another directive (e.g., ngClass, ngStyle, ngModel)
      - ngClass: adds and removes a set of CSS classes
      - ngStyle: adds and removes a set of HTML styles
      - ngModel: creates a two-way data binding between an HTML form element and a variable in the component
*/

/*
PIPES:
 - simple functions to use in template expressions to accept an input value and return a transformed value
 - useful for formatting data for display
 - built-in pipes: DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, PercentPipe, JsonPipe, SlicePipe, etc.
 - custom pipes can also be created
*/

/*
QUICK NOTE ON COMPONENT CREATION:
 - Angular CLI command: ng generate component component-name
 - make sure to open the folder in terminal to run the command where you want the component created
*/

/*
LIFECYCLE HOOKS:
 - A component instance has a lifecycle that starts when Angular instantiates the component class and renders its view along with its child views
 - A lifecycle continues with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed
  - Finally, the lifecycle ends when Angular removes the component's view from the DOM and destroys the component instance
  - Angular offers lifecycle hooks that provide visibility into these key life moments and the ability to act when they occur
     - OnInit is one of the most commonly used lifecycle hooks, it's a lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
*/