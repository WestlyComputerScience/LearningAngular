import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgIf, NgFor, TitleCasePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // allows us to use two-way binding (ngModel)
import { Book } from './book/book';
import { BookDesign } from '../Types/book-design';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  imports: [FormsModule, NgIf, NgFor, TitleCasePipe, CurrencyPipe, Book],
  standalone: true,
  templateUrl: './books.html',
  styleUrls: ['./books.css'],
})
export class Books implements OnInit, OnDestroy{

  books: BookDesign[] = [];

  isHidden: boolean = false;

  // private booksService: BooksService; // not a dependency injection

  isShowing: boolean = true;

  myInterval: any = null;

  constructor(private booksService: BooksService) { // creates a BooksService instance via dependency injection (much easier then manualy messing with it and getting all the imports, Angular does it for us)
    // With respect to time, constructors are called first, before ngOnInit.

    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
    // called second when HTML is loaded onto the DOM
    // this.myInterval = setInterval(() => {
      // console.log('Hello from ngOnInit interval');
    // }, 1000);

    // can also put this here isntead of constructor
    // this.books = this.booksService.getBooks();
  }

  ngOnDestroy(): void {
      console.log({ onDestroy: 'books has been destroyed' });
      clearInterval(this.myInterval); // this successfully stops our timer when component is destroyed
  }

  toggleHidden(): void { // toggles list of books visibility
    this.isHidden = !this.isHidden;
  }

  myName: string = ''; // done on it's own by two-way binding

  handleInput(event: any): void { // updates myName based on user input
    this.myName = event.target.value;
  }

  cart: BookDesign[] = []; // array to hold books added to cart

  // addToCart(book: BookDesign): void { // adds book to cart array
  //   console.log('Adding to cart:', book);
  // }
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
  - Examples: 
      - ngOnChanges(): 
      - ngOnInit():
      - ngDoCheck():
      - ngDoCheck():
      - ngAfterContentInit():
      - ngAfterContentChecked():
      - ngAfterViewInit():
      - ngAfterViewChecked():
      - ngOnDestroy():
*/

/*
SERVICES:
  - Angular services are singleton objects that get instantiated only once during the lifetime of an application
  - They are used to share data and functionality across different components in an application
  - Services are typically used for tasks such as data retrieval, business logic, and state management
  - To create a service, you can use the Angular CLI command: ng generate service service-name
  - Once a service is created, it can be injected into components or other services using Angular's dependency injection system
  - This allows components to access the functionality provided by the service without having to create their own instances
  - Example use cases for services include:
      - Data retrieval: Services can be used to fetch data from APIs or databases and provide it to components
      - Business logic: Services can encapsulate complex business logic that can be reused across multiple components
      - State management: Services can be used to manage the state of an application and share data between components
  - I.e our component should be simple and neat, focused on the user's experience. The service should handle the heavy lifting of data management and business logic.
*/

/*
DEPENDENCY INJECTION:
 - wired into the Angular framework and is used to provide components with the services or other dependencies they need
  - allows for better separation of concerns, easier testing, and improved maintainability of code
  - In Angular, dependency injection is implemented using decorators and metadata
  - To use dependency injection in Angular, you typically follow these steps:
      1. Create a service: Define a service class that provides the functionality you want to share across components
      2. Register the service: Use the @Injectable() decorator to register the service with Angular's dependency injection system
      3. Inject the service: In the component where you want to use the service, add a constructor parameter of the service type
      4. Use the service: Once the service is injected, you can use its methods and properties in the component
  - Angular's dependency injection system takes care of creating and managing the service instances, so you don't have to worry about it
*/

/*
MODULES:
 - Angular modules are a way to organize and group related components, directives, pipes, and services into cohesive blocks of functionality
- They help to manage the complexity of large applications by breaking them down into smaller, more manageable pieces
- Each Angular application has at least one module, the root module, which is typically named AppModule
- Modules can import other modules to use their functionality, and they can also export their own components, directives, and pipes for use in other modules
- To create a module, you can use the Angular CLI command: ng generate module module-name
- Once a module is created, you can define its metadata using the @NgModule() decorator, which includes properties such as:
    - declarations: An array of components, directives, and pipes that belong to the module
    - imports: An array of other modules that the module depends on
    - exports: An array of components, directives, and pipes that should be available for use in other modules
    - providers: An array of services that should be available for injection in the module's components
- By organizing your application into modules, you can improve code maintainability, reusability, and scalability
- i.e. we created a BooksModule to encapsulate all the books-related functionality, making it easier to manage and reuse across the application
*/

/*
ANGULAR ROUTING:
 - Angular routing is a way to navigate between different views or pages in a single-page application (SPA)
 - It allows users to navigate to different parts of the application without having to reload the entire page
 - Angular routing is implemented using the Angular Router module, which provides a set of services and directives for managing navigation and routing
  - To set up routing in an Angular application, you typically follow these steps:
      1. Define routes: Create an array of route objects that map URL paths to components
      2. Configure the router: Use the RouterModule.forRoot() method to configure the router with the defined routes
      3. Add router outlet: Add a <router-outlet> directive to the application template to specify where the routed components should be displayed
      4. Navigate between routes: Use the Router service or routerLink directive to navigate between different routes in the application
*/