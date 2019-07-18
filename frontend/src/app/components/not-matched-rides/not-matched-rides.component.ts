import {Component, OnInit} from '@angular/core';
import {RideService} from '../../services/ride/ride.service';
import {RidesInformation} from 'src/app/models/rides-information/rides-information.model';


@Component({
    selector: 'app-not-matched-rides',
    templateUrl: './not-matched-rides.component.html',
    styleUrls: ['./not-matched-rides.component.scss']
})
export class NotMatchedRidesComponent implements OnInit {

    public ridesInformation: RidesInformation;
    public errorMessage;

    careInstitution = 1;

    constructor(private rideService: RideService) {
    }

    ngOnInit() {
        this.getRides();
    }

    getRides() {
        this.rideService.getAllNotMatchedRides(this.careInstitution)
            .subscribe(data => this.ridesInformation = data,
                error => this.errorMessage = error);
    }
}
