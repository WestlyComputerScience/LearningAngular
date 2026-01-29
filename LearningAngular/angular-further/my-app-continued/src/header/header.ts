import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { CommonModule, NgClass, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'hinv-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // lets say you have a component you don't want reusable, but has input/output to other components
  // maybe team doesn't want your component to be reusable (doesn't help their use case etc.)

  title: string = 'Rooms Something';

}
