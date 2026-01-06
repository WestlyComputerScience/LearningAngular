import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './rooms';

/*
Note: You can view the localhost, go to sources, and hit CRLT + P to find your code, put breakpoints, and debug it
*/

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss'],
  imports: [CommonModule], // 👈 REQUIRED for *ngIf, *ngFor, pipes
})
export class RoomsComponent {

  hotelName = "Hilton Hotel";

  numOfRooms = 9;

  hideRooms = false;

  rooms: Room = {
  totalRooms: 20,
  availableRooms : 10,
  bookedRooms: 5
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://image.com',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.24314354,
    },
    {
      roomNumber: 2,
      roomType: 'Tiny Room',
      amenities: 'Shower',
      price: 20000,
      photos: 'https://image2.com',
      checkInTime: new Date('14-Sep-2022'),
      checkOutTime: new Date('21-Sep-2022'),
      rating: 0.2,
    },
    {
      roomNumber: 3,
      roomType: 'Big Room',
      amenities: 'Trash Can',
      price: 1725,
      photos: 'https://image3.com',
      checkInTime: new Date('17-Jan-2022'),
      checkOutTime: new Date('25-Jan-2022'),
      rating: 2.7,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggle () {
    this.hideRooms = !this.hideRooms;
  }
}
