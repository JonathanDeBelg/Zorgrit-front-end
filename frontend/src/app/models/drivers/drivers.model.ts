import {Drivers} from './drivers.interface.model';
import {Driver} from '../driver/driver.interface.model';

export class DriversImpl implements Drivers {
    drivers: Driver[];
    length: number;

    constructor() {
        this.drivers = [];
    }
}
