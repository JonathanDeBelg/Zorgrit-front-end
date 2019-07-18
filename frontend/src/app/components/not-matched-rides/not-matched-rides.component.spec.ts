import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NotMatchedRidesComponent} from './not-matched-rides.component';

describe('NotMatchedRidesComponent', () => {
    let component: NotMatchedRidesComponent;
    let fixture: ComponentFixture<NotMatchedRidesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotMatchedRidesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotMatchedRidesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
