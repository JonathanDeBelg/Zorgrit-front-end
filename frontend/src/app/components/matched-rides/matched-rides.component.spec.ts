import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatchedRidesComponent} from './matched-rides.component';

describe('MatchedRidesComponent', () => {
    let component: MatchedRidesComponent;
    let fixture: ComponentFixture<MatchedRidesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MatchedRidesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MatchedRidesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
