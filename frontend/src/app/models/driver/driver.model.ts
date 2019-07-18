import {Driver} from './driver.interface.model';
import {UtilityImpl} from '../utility/utility.model';
import {CareInstitutionImpl} from '../care-institution/care-institution.model';
import {Client} from '../client/client.interface.model';

export class DriverImpl implements Driver {
    careInstitution: CareInstitutionImpl;
    verification: boolean;
    utility: UtilityImpl;
    preferredClients: Array<Client>;

    numberOfPassengers: number;
    numberPlate: string;
    kmDrivenThisMonth: number;
    kmDrivenThisYear: number;
    totalEarnedThisMonth: number;
    totalEarnedThisYear: number;
    peopleHelpedThisMonth: number;

    id: number;
    type: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    street: string;
    houseNumber: string;
    zipCode: string;
    residence: string;
    password: string;
    dateOfBirth: string;
}
