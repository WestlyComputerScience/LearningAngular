import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Books } from './books/books';

@Component({ // this is the metadata for the component
  selector: 'app-root',
  imports: [RouterOutlet, Books],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { // this is the meat of the component
  protected readonly title = signal('my-app');
}

// ng --help for commands
