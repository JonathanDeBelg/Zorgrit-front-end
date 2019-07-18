import {DriverService} from './../../services/driver/driver.service';
import {Drivers} from 'src/app/models/drivers/drivers.interface.model';
import {LimitationsImpl} from './../../models/limitations/limitations.model';
import {LimitationImpl} from './../../models/limitation/limitation.model';
import {CareInstitutionImpl} from './../../models/care-institution/care-institution.model';
import {UtilityImpl} from 'src/app/models/utility/utility.model';
import {UtilitiesImpl} from './../../models/utilities/utilities.model';
import {ClientImpl} from './../../models/client/client.model';
import {ClientService} from './../../services/client/client.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  limitations: LimitationsImpl;
  utilities: UtilitiesImpl;
  utility: UtilityImpl;
  drivers: Drivers;

  errorMessage: string;
  createClient: FormGroup;
  clientModel: ClientImpl;
  clientModelActual: ClientImpl;

  constructor(private clientService: ClientService, private router: Router, private driverService: DriverService) {
  }

  ngOnInit() {
    this.getUtilities();
    this.getLimitations();
    this.getDrivers();

    this.createClient = new FormGroup({
      firstName: new FormControl('', Validators.required),
      infix: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      houseNumber: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      residence: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      limitation: new FormControl('', Validators.required),
      utility: new FormControl('', Validators.required),
      companion: new FormControl('', Validators.required),
      drivers: new FormControl('', Validators.required)
    });
  }

  getLimitations() {
    this.clientService.getLimitations()
      .subscribe(data => this.limitations = data,
        error => this.errorMessage = error);
  }

  getUtilities() {
    this.clientService.getUtilities()
      .subscribe(data => this.utilities = data,
        error => this.errorMessage = error);
  }

  getDrivers() {
    this.driverService.getDrivers()
      .subscribe(data => this.drivers = data,
        error => this.errorMessage = error);
  }

  onSubmit() {
    var limitations = new Array();
    var drivers = new Array();
    var lastName;

    this.createClient.value.limitation.forEach(obj => {
      limitations.push(new LimitationImpl(obj));
    });

    this.createClient.value.drivers.forEach(obj => {
      drivers.push(obj);
    });

    if (this.createClient.value.infix.isset) {
      lastName = this.createClient.value.lastName;
    } else {
      lastName = this.createClient.value.infix + ' ' + this.createClient.value.lastName;
    }

    this.clientModel = new ClientImpl();
    this.clientModel.firstName = this.createClient.value.firstName;
    this.clientModel.lastName = lastName;
    this.clientModel.email = this.createClient.value.email;
    this.clientModel.phoneNumber = this.createClient.value.phoneNumber;
    this.clientModel.street = this.createClient.value.street;
    this.clientModel.houseNumber = this.createClient.value.houseNumber;
    this.clientModel.zipCode = this.createClient.value.zipCode;
    this.clientModel.residence = this.createClient.value.residence;
    this.clientModel.dateOfBirth = this.createClient.value.dateOfBirth;
    this.clientModel.limitations = limitations;
    this.clientModel.utility = new UtilityImpl(0, this.createClient.value.utility);
    this.clientModel.careInstitution = new CareInstitutionImpl('test');
    this.clientModel.companion = this.createClient.value.companion;
    this.clientModel.preferredDrivers = null;

    this.clientService.createClient(this.clientModel)
        .subscribe(
            data => console.log('Succes', data),
            error => this.errorMessage = error
        );

    window.location.href = '/clients';
  }
}
