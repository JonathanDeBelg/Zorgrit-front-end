import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchRideDriverComponent } from './match-ride-driver.component';

describe('MatchRideDriverComponent', () => {
  let component: MatchRideDriverComponent;
  let fixture: ComponentFixture<MatchRideDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchRideDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchRideDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
