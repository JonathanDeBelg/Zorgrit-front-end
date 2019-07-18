import {Component, OnInit} from '@angular/core';
import {RideService} from '../../services/ride/ride.service';
import {RidesInformation} from '../../models/rides-information/rides-information.model';

@Component({
    selector: 'app-rides',
    templateUrl: './rides.component.html',
    styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {
    public ridesInformation: RidesInformation;
    interval: any;

    careInstitution = 1;

    constructor(private rideService: RideService) {
    }

    ngOnInit() {
        this.refreshData();
        this.interval = setInterval(() => {
            this.refreshData();
        }, 1000);
    }

    refreshData() {
        this.getAllRides();
    };

    getAllRides(): void {
        this.rideService.getAllRides(this.careInstitution)
            .subscribe(data => this.ridesInformation = data);
    }

}
