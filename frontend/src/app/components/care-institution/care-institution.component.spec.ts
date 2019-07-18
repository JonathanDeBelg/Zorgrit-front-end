import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareInstitutionComponent } from './care-institution.component';

describe('CareInstitutionComponent', () => {
  let component: CareInstitutionComponent;
  let fixture: ComponentFixture<CareInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
