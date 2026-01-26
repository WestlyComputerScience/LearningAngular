import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgIf, NgFor } from '@angular/common';
import { RoomType, RoomDetailsList } from './rooms-types';

@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, NgIf, NgClass, NgFor],
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

  roomList: RoomDetailsList[] = [
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

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }

}
