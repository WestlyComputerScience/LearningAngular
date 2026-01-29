import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, SimpleChange, ViewChild, AfterViewInit  } from '@angular/core';
import { CommonModule, NgClass, NgIf, NgFor } from '@angular/common';
import { RoomType, RoomDetailsList } from './rooms-types';
import { RoomsTable } from './rooms-table/rooms-table';
import { Header } from '../header/header';

@Component({
  selector: 'hinv-rooms',
  imports: [CommonModule, NgIf, NgClass, NgFor, RoomsTable, Header],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms implements OnInit {

  hotelName: string = "Westly's Hotel"; // Interpolation Syntax
  numberOfRooms: number = 10;
  isDisabled: boolean = false;

  selectedRoom!: RoomDetailsList;

  rooms: RoomType = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title: string = 'Room List';

  roomList: RoomDetailsList[] = []; // Note: need to assign this to empty array otherwise typescript (ts) will get mad. 

  constructor() { // component initialized first, then ngOnInit is called. Constructor is used to inject services (dependency injections), no blocking code for constructor (should be part of ngOnInit).
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
    this.title = "Rooms List"; // the point of this is to show that if we were to change the title as opposed to rooms, ngOnChanges labels the title as the changed variable
  }

  selectRoom(room: RoomDetailsList): void {
    this.selectedRoom = room;
    console.log(`This room has been selected ${room}`);
  }

  addRoom(): void {
    const room: RoomDetailsList = {
      roomNumber: 4,
      roomType: 'big room',
      amenities: 'stuff',
      price: 4,
      photos: "really long link",
      checkInTime: new Date('1-Jan-2026'),
      checkOutTime: new Date('2-Jan-2026'),
      rating: -1,
    };
    // Applying push changes the roomList property, which creates a new instance
    // This also enables us to use ChangeDetectionStrategy.OnPush for our child component (if something changes )
    this.roomList = [...this.roomList, room]; // Mutating the array (aka this.roomList.push(room) causes significant lag and errors along the road, this is the safer bet)
  }

}
