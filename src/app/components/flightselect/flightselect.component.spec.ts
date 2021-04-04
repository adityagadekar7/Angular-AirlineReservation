import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightselectComponent } from './flightselect.component';

describe('FlightselectComponent', () => {
  let component: FlightselectComponent;
  let fixture: ComponentFixture<FlightselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
