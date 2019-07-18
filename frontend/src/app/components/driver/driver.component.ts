import {Component, OnInit} from '@angular/core';
import {Driver} from '..//../models/driver/driver.interface.model';
import {DriverService} from '../../services/driver/driver.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../services/client/client.service';
import {UtilitiesImpl} from '../../models/utilities/utilities.model';
import {DriverImpl} from '../../models/driver/driver.model';
import {UtilityImpl} from '../../models/utility/utility.model';
import {Client} from '../../models/client/client.interface.model';
import {Clients} from '../../models/clients/clients.interface.model';

@Component({
    selector: 'app-driver',
    templateUrl: './driver.component.html',
    styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
    driver: Driver;
    driverModel: Driver;
    preferredClients: Array<Client>;
    errorMessage;
    readOnly: Boolean;
    updateDriver: FormGroup;
    utilities: UtilitiesImpl;
    clients: Clients;
    popoverTitle: string = 'Bevestig verwijdering';
    popoverMessage: string = 'Weet u zeker dat u deze chauffer wilt verwijderen?';

    constructor(private driverService: DriverService, private clientService: ClientService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.readOnly = true;
        this.getDriver();
        this.getUtilities();
        this.getClients();
    }

    getUtilities() {
        this.clientService.getUtilities()
            .subscribe(data => this.utilities = data,
                error => this.errorMessage = error);
    }

    getClients() {
        this.clientService.getClients()
            .subscribe(data => this.clients = data,
                error => this.errorMessage = error);
    }

    editDriver(driver: Driver): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.driverService.editDriver(driver, id)
            .subscribe(data => this.driver = data,
                error => this.errorMessage = error);
    }

    deleteDriver(driver: Driver): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.driverService.deleteDriver(id)
            .subscribe(data => this.driver = driver,
                error => this.errorMessage = error);
        window.location.href = './drivers';
    }

    getDriver(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.driverService.getDriver(id)
            .subscribe(data => {
                    this.driver = data;
                    this.preferredClients = data.preferredClients;
                    this.updateDriver = new FormGroup({
                        firstname: new FormControl(data.firstName, Validators.required),
                        lastname: new FormControl(data.lastName, Validators.required),
                        dateOfBirth: new FormControl(data.dateOfBirth, Validators.required),
                        street: new FormControl(data.street, Validators.required),
                        houseNumber: new FormControl(data.houseNumber, Validators.required),
                        zipCode: new FormControl(data.zipCode, Validators.required),
                        residence: new FormControl(data.residence, Validators.required),
                        email: new FormControl(data.email, Validators.required),
                        phoneNumber: new FormControl(data.phoneNumber, Validators.required),
                        utility: new FormControl(data.utility.name, Validators.required),
                        kmDrivenThisMonth: new FormControl(data.kmDrivenThisMonth, Validators.required),
                        kmDrivenThisYear: new FormControl(data.kmDrivenThisYear, Validators.required),
                        numberOfPassengers: new FormControl(data.numberOfPassengers, Validators.required),
                        peopleHelpedThisMonth: new FormControl(data.peopleHelpedThisMonth, Validators.required),
                        totalEarnedThisMonth: new FormControl(data.totalEarnedThisMonth, Validators.required),
                        totalEarnedThisYear: new FormControl(data.totalEarnedThisYear, Validators.required),
                        preferredClients: new FormControl(data.preferredClients, Validators.required)
                    });
                },
                error => this.errorMessage = error);
    }

    changeReadonlyToUpdate() {
        this.readOnly = false;
    }

    onSubmit() {
        let updatedPreferredClients = [];
        this.updateDriver.value.preferredClients.forEach(obj => {
            updatedPreferredClients.push(obj);
        });

        this.driverModel = new DriverImpl();

        this.driverModel.firstName = this.updateDriver.value.firstname;
        this.driverModel.lastName = this.updateDriver.value.lastname;
        this.driverModel.email = this.updateDriver.value.email;
        this.driverModel.phoneNumber = this.updateDriver.value.phoneNumber;
        this.driverModel.street = this.updateDriver.value.street;
        this.driverModel.houseNumber = this.updateDriver.value.houseNumber;
        this.driverModel.zipCode = this.updateDriver.value.zipCode;
        this.driverModel.residence = this.updateDriver.value.residence;
        this.driverModel.dateOfBirth = this.updateDriver.value.dateOfBirth;
        this.driverModel.utility = new UtilityImpl(0, this.updateDriver.value.utility);
        this.driverModel.preferredClients = updatedPreferredClients;
        
        this.editDriver(this.driverModel);
        location.reload();
    }
}
