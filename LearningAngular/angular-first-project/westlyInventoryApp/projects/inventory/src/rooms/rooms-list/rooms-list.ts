import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list', // this is the HTML tag to reuse this component
  imports: [CommonModule, NgClass], // Since this is a standalone component, we need to import NgClass to use it and apply any styles
  standalone: true,
  templateUrl: './rooms-list.html',
  styleUrls: ['./rooms-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // 2 Choices: Default and OnPush. Default will apply changeDetect on any possible change. OnPush can be applied only if you're not modifying any internal data in this component. 
                                                   // Since we use Input and Output, it doesn't change the data internally, so we're safe to use it. 
})
export class RoomsList implements OnInit, OnChanges {

  // Basically marks it as a DOM input element which updates the data on the website as changes are detected
  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  // Again, marked as a DOM property to update as changes are detected
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void { }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room); // emits our data to the "smart class"
  }
}
