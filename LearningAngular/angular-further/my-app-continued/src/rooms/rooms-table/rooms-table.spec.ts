import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsTable } from './rooms-table';

describe('RoomsTable', () => {
  let component: RoomsTable;
  let fixture: ComponentFixture<RoomsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
