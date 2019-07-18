import {Rides} from './rides.interface.model';
import {Ride} from '../ride/ride.interface.model';

export class RidesImpl implements Rides {
    rides: Ride[];

    constructor(rides: Ride[]) {
        this.rides = rides;
    }
}
