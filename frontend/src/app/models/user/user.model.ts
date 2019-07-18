import {User} from './user.interface.model';

export class UserImpl implements User {
    id: Number;
    type: String;
    firstName: String;
    lastName: String;
    email: String;
    phoneNumber: Number;
    street: String;
    houseNumber: Number;
    zipCode: String;
    residence: String;
    password: String;
    dateOfBirth: Date;
    firstTimeProfileCheck: boolean;
}
