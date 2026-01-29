import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, SimpleChange, DoCheck, ViewChild, AfterViewInit, AfterViewChecked  } from '@angular/core';
import { CommonModule, NgClass, NgIf, NgFor, } from '@angular/common';
import { RoomType, RoomDetailsList } from '../rooms-types';
import { Header } from '../../header/header';

@Component({
  selector: 'hinv-rooms-table',
  imports: [CommonModule, NgIf, NgClass, NgFor, Header],
  templateUrl: './rooms-table.html',
  styleUrl: './rooms-table.css',
  // So when I add an element to the other array, I didn't specify an @input, so it won't show up in the app, lol. (.push mutated existed old object, but should be immutable. Thus, OnPush requires an entirely new object everytime [...spread operation, new element])
  // changeDetection: ChangeDetectionStrategy.OnPush,  // 2 Choices: Default and OnPush. Default will apply changeDetect on any possible change. OnPush can be applied only if you're not modifying any internal data in this component. 
                                                    // Since we use Input and Output, it doesn't change the data internally, so we're safe to use it. 
})
// OnChanges: this only works with components and directives with the @input 
export class RoomsTable implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked {

  @Input() rooms: RoomDetailsList[] = []; // Use decorator @Input to recieve info from parent

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomDetailsList>();

  // static is false by default
  // we're trying to load header component inside rooms
  // as we load header component, static true says it's safe to use in ngOnInit. Otherwise, may not be safe to use during initialization (if had synchronous code, then can cause issues). Used to cause a lot of errors, so static : true to make sure you understand you're safe to put code there (recognize it's your fault)
  @ViewChild(Header, { static: true }) header!: Header; // queries the component tree that already exists in the template for Header, however console.log(this.header) gives undefined

  selectRoom(room: RoomDetailsList): void {
    this.selectedRoom.emit(room); // sends data to parent
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.header);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Note: this contains a previous pointer to a previous object state it was in.
    //       It also contains a firstChange to show it's the first time a value get changed
    //       The use case for this is to log these values, you want to control what value is updated when new data is passed, or run change detection manually
    //       Only works with @input receiving a new value
    console.log(changes);
    // the point of this is to show that if we were to change the title as opposed to rooms, ngOnChanges labels the title as the changed variable
    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase(); // aka if the value is updated, then we make the title upper case. 
    }
  }

  ngDoCheck(): void { // This lifecycle hook activates if ANY change to ANY elements on your app occurs, very expensive...
    // avoid this as much as possible
    // Don't do ngOnChanges and ngDoCheck on the same component, they'll do overlapping mechanics (i.e. ngOnChanges is a subset of ngDoCheck)
    console.log('ngDoCheck is called');
  }

  // after the view and template is fully initialized, this method is safe to use and called
  ngAfterViewInit(): void {
    console.log(this.header); // should show the data, even if static : false

    // also no work if change detection, need to use HTML property binding and @input to work
    // this.header.title = "Rooms View"; // the error this gives in development environment is fine (if in production build then problem)
    // in development environment, change detection runs twice (hence why the error)
  }

  ngAfterViewChecked(): void { // runs everytime one change check occurs for a component's view

  }

}

/*
Note: he mentioned CHANGE DETECTION being very important
 - refers to the paint flash on the DOM and the ChangeDetectionStrategy.OnPush to help performance 
*/

/*
Reminder: you can turn on paint flashing to show affected elements (aka elements requiring a re-paint)
*/