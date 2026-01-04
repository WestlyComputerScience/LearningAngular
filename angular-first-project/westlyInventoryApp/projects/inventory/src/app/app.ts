import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from '../rooms/rooms';

// Note: "ng serve" is how to open a localhost tab!

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent],
  templateUrl: './app.html',
  //template: "Hello World from inline template!",
  styleUrl: './app.scss'
  //styles: [`h1 { color: red }`] // how to do inline styles
})
export class App {
  protected readonly title = signal('inventory');
}
