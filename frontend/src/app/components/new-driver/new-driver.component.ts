import {Component, OnInit} from '@angular/core';
import {DriverService} from '../../services/driver/driver.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {DriverImpl} from 'src/app/models/driver/driver.model';
import {UtilitiesImpl} from 'src/app/models/utilities/utilities.model';
import {ClientService} from 'src/app/services/client/client.service';
import {UtilityImpl} from 'src/app/models/utility/utility.model';
import {CareInstitutionImpl} from 'src/app/models/care-institution/care-institution.model';

@Component({
    selector: 'app-new-driver',
    templateUrl: './new-driver.component.html',
    styleUrls: ['./new-driver.component.scss']
})
export class NewDriverComponent implements OnInit {

    public errorMessage;

    utilities: UtilitiesImpl;
    createDriver: FormGroup;
    driverModel: DriverImpl;
    driverModelActual: DriverImpl;

    CAREINSTITUTIONID = 1;

    constructor(private clientService: ClientService, private driverService: DriverService, private router: Router) {
    }

    ngOnInit() {
        this.getUtilities();

        this.createDriver = new FormGroup({
            firstName: new FormControl(),
            infix: new FormControl(),
            lastName: new FormControl(),
            dateOfBirth: new FormControl(),
            street: new FormControl(),
            houseNumber: new FormControl(),
            zipCode: new FormControl(),
            residence: new FormControl(),
            email: new FormControl(),
            phoneNumber: new FormControl(),
            numberOfPassengers: new FormControl(),
            numberPlate: new FormControl(),
            utility: new FormControl()
        });
    }

    onSubmit() {
        var lastName;
        
        if (this.createDriver.value.infix == null) {
            lastName = this.createDriver.value.lastName;
          } else {
            lastName = this.createDriver.value.infix + ' ' + this.createDriver.value.lastName;
          }

        this.driverModel = new DriverImpl();

        this.driverModel.id = this.createDriver.value.id;
        this.driverModel.firstName = this.createDriver.value.firstName;
        this.driverModel.lastName = lastName;
        this.driverModel.email = this.createDriver.value.email;
        this.driverModel.phoneNumber = this.createDriver.value.phoneNumber;
        this.driverModel.street = this.createDriver.value.street;
        this.driverModel.houseNumber = this.createDriver.value.houseNumber;
        this.driverModel.zipCode = this.createDriver.value.zipCode;
        this.driverModel.residence = this.createDriver.value.residence;
        this.driverModel.dateOfBirth = this.createDriver.value.dateOfBirth;
        this.driverModel.numberOfPassengers = this.createDriver.value.numberOfPassengers;
        this.driverModel.numberPlate = this.createDriver.value.numberPlate;
        this.driverModel.utility = new UtilityImpl(0, this.createDriver.value.utility);
        this.driverModel.careInstitution = new CareInstitutionImpl("test");

        this.driverService.createDriver(this.driverModel)
            .subscribe(
                data => console.log('Succes', data),
                error => this.errorMessage = error
            );

        window.location.href = '/drivers';
    }

    getUtilities() {
        this.clientService.getUtilities()
          .subscribe(data => this.utilities = data,
            error => this.errorMessage = error);
      }

}
