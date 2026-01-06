import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // allows us to use *ngSwitch
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from '../rooms/rooms.component';
// import { NgSwitch } from '@angular/common'; // allows us to use *switch

// Note: "ng serve" is how to open a localhost tab!

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, CommonModule],
  templateUrl: './app.html',
  //template: "Hello World from inline template!",
  styleUrl: './app.scss'
  //styles: [`h1 { color: red }`] // how to do inline styles
})
export class App {
  protected readonly title = signal('inventory');

  role = 'User';
}
