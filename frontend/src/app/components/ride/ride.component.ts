import {Component, OnInit} from '@angular/core';
import {Ride} from '../../models/ride/ride.interface.model';
import {ActivatedRoute} from '@angular/router';
import {RideService} from '../../services/ride/ride.service';

@Component({
    selector: 'app-ride',
    templateUrl: './ride.component.html',
    styleUrls: ['./ride.component.scss']
})
export class RideComponent implements OnInit {

    public ride: Ride;
    public errorMessage;

    constructor(private rideService: RideService,
                private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.getRide();
    }

    getRide(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.rideService.getRide(id)
            .subscribe(data => this.ride = data,
                error => this.errorMessage = error);
    }

}

