import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { CommonModule, NgClass, NgIf, NgFor } from '@angular/common';
import { RoomType, RoomDetailsList } from '../rooms-types';

@Component({
  selector: 'hinv-rooms-table',
  imports: [CommonModule, NgIf, NgClass, NgFor],
  templateUrl: './rooms-table.html',
  styleUrl: './rooms-table.css',
})
export class RoomsTable implements OnInit {

  @Input() rooms: RoomDetailsList[] = []; // Use decorator @Input to recieve info from parent 

  constructor() {
  }

  ngOnInit(): void {
  }

}
