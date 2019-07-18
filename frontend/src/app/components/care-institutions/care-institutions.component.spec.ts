import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareInstitutionsComponent } from './care-institutions.component';

describe('CareInstitutionsComponent', () => {
  let component: CareInstitutionsComponent;
  let fixture: ComponentFixture<CareInstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareInstitutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
