import { Component, signal } from '@angular/core';
import { CommonModule, NgClass, NgIf, NgFor, NgSwitch } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Rooms } from '../rooms/rooms';
import { Header } from '../header/header';

@Component({
  selector: 'hinv-root', /* Note: I've renamed my prefix in angular.json to get rid of "app-root" and changed it to hinv-root */
  imports: [RouterOutlet, Rooms, CommonModule, NgClass, NgIf, NgFor, NgSwitch, Header ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app-continued');

  loginTypes: string = "User";
}

// ========== GENERAL COMMANDS ==========
// ng g c <component name>          This generations a new component 

// Pipelines in 

