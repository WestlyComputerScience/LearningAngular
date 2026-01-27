import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgIf, NgFor } from '@angular/common';
import { RoomType, RoomDetailsList } from './rooms-types';
import { RoomsTable } from './rooms-table/rooms-table';

@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, NgIf, NgClass, NgFor, RoomsTable],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms implements OnInit {

  hotelName: string = "Westly's Hotel"; // Interpolation Syntax
  numberOfRooms: number = 10;
  isDisabled: boolean = false;

  rooms: RoomType = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomDetailsList[] = []; // Note: need to assign this to empty array otherwise typescript (ts) will get mad. 

  constructor() { // component initialized first, then ngOnInit is called. Constructor is used to inject services (dependency injections), no blocking code (should be part of ngOnInit).
  }

  ngOnInit(): void { // should write logic here
    this.roomList = [ // aka, imagine we're loading our Array's data from some database 
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
  }

  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }

}
