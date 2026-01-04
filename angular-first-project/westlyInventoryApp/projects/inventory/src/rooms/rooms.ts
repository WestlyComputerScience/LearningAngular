import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class RoomsComponent {

  hotelName = "Hilton Hotel";

  numOfRooms = 9;

  hideRooms = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle () {
    this.hideRooms = !this.hideRooms;
  }
}
