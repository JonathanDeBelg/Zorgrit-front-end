import {CareInstitution} from './../care-institution/care-institution.interface.model';
import {Client} from './client.interface.model';
import {Utility} from '../utility/utility.interface.model';
import {Limitation} from '../limitation/limitation.interface.model';
import {Driver} from '../driver/driver.interface.model';

export class ClientImpl implements Client {
    careInstitution: CareInstitution;
    companion: string;
    dateOfBirth: string;
    driverPreferenceForced: boolean;
    email: string;
    firstName: string;
    houseNumber: string;
    id: number;
    lastName: string;
    limitations: Array<Limitation>;
    phoneNumber: string;
    preferredDrivers: Array<Driver>;
    residence: string;
    street: string;
    utility: Utility;
    zipCode: string;
}
