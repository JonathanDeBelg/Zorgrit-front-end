import {Component, OnInit} from '@angular/core';
import {Drivers} from 'src/app/models/drivers/drivers.interface.model';
import {DriverService} from '../../services/driver/driver.service';

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.component.html',
    styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
    public drivers: Drivers;

    constructor(private driverService: DriverService) {
    }

    ngOnInit() {
        this.driverService.getDriversCareInstitution(1)
        .subscribe(data => this.drivers = data);
        // this.driverService.getDrivers()
        //     .subscribe(data => this.drivers = data);
    }

}
