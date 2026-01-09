import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './rooms';
import { RoomsList } from './rooms-list/rooms-list';

/*
Note: You can view the localhost, go to sources, and hit CRLT + P to find your code, put breakpoints, and debug it
*/

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss'],
  imports: [CommonModule, RoomsList], // 👈 REQUIRED for *ngIf, *ngFor, pipes
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";

  numOfRooms = 9;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
  totalRooms: 20,
  availableRooms : 10,
  bookedRooms: 5
  };

  /*
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
  */

  roomList: RoomList[] = [];
  constructor() { // should only be used to inject services, no blocking code here (should be in ngOnInit)
  }

  ngOnInit(): void {
    this.roomList = [ // lets say this is our data that we're loading
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

  toggle () {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Small Room',
      amenities: 'stuff',
      price: 250,
      photos: 'somthing.com',
      checkInTime: new Date('11-Nov-2024'),
      checkOutTime: new Date('26-Nov-2024'),
      rating: 5,
    }
    // this.roomList.push(room); //immutable for him, idk why not for me
    this.roomList = [...this.roomList, room]; // spread operator spreads the previous data and adds the new record
  }

}
