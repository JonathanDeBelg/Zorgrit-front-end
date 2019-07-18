import {Ride} from '../ride/ride.interface.model';
import {Client} from '../client/client.interface.model';
import {Driver} from '../driver/driver.interface.model';

export class RideInformationModule implements Ride {
    id: number;
    clientId: number;
    driverId: number;
    preferedDriver: number;
    preferedCareInstitution: number;
    pickUpDateTime: string;
    pickUpLocation: string;
    dropOffLocation: string;
    numberOfCompanions: number;
    numberOfLuggage: number;
    returnRide: boolean;
    callService: boolean;
    utility: string;
    repeatingRideId: number;
    cancelledByClients: boolean;

    client: Client;
    driver: Driver;
}