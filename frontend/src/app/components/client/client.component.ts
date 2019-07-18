import {Component, OnInit} from '@angular/core';
import {Client} from './../../models/client/client.interface.model';
import {ClientService} from './../../services/client/client.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientImpl} from '../../models/client/client.model';
import {LimitationsImpl} from '../../models/limitations/limitations.model';
import {UtilitiesImpl} from '../../models/utilities/utilities.model';
import {Utility} from '../../models/utility/utility.interface.model';
import {UtilityImpl} from '../../models/utility/utility.model';
import {CareInstitutionImpl} from 'src/app/models/care-institution/care-institution.model';
import {Drivers} from '../../models/drivers/drivers.interface.model';
import {Driver} from '../../models/driver/driver.interface.model';
import {DriverService} from './../../services/driver/driver.service';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
    limitations: LimitationsImpl;
    drivers: Drivers;
    preferredDrivers: Array<Driver>;
    utilities: UtilitiesImpl;
    utility: Utility;
    client: Client;
    errorMessage;
    readOnly: Boolean;
    clientModel: Client;
    updateClient: FormGroup;
    popoverTitle: string = 'Bevestig verwijdering';
    popoverMessage: string = 'Weet u zeker dat u deze cliënt wilt verwijderen?';


    constructor(private clientService: ClientService, private driverService: DriverService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getClient();
        this.getUtilities();
        this.getLimitations();
        this.getDrivers();
        this.readOnly = true;
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
            .subscribe(data => this.drivers = data);
    }

    getClient(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.clientService.getClient(id)        
            .subscribe(data => {
                    this.client = data;
                    this.preferredDrivers = data.preferredDrivers;
                    this.updateClient = new FormGroup({
                        firstname: new FormControl(data.firstName, Validators.required),
                        lastname: new FormControl(data.lastName, Validators.required),
                        street: new FormControl(data.street, Validators.required),
                        houseNumber: new FormControl(data.houseNumber, Validators.required),
                        zipCode: new FormControl(data.zipCode, Validators.required),
                        residence: new FormControl(data.residence, Validators.required),
                        email: new FormControl(data.email, Validators.required),
                        phoneNumber: new FormControl(data.phoneNumber, Validators.required),
                        companion: new FormControl(data.companion, Validators.required),
                        utility: new FormControl(data.utility.name, Validators.required),
                        dateOfBirth: new FormControl(data.dateOfBirth, Validators.required),
                        limitations: new FormControl(data.limitations, Validators.required),
                        preferredDrivers: new FormControl(data.preferredDrivers, Validators.required)
                    })
                },
                error => this.errorMessage = error);
    }

    editClient(client: Client): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.clientService.editClient(client, id)
            .subscribe(data => this.client = data,
                error => this.errorMessage = error);
    }

    changeReadonlyToUpdate() {
        this.readOnly = false;
    }

    onSubmit() {
        let updatedPreferredDrivers = [];
        this.updateClient.value.preferredDrivers.forEach(obj => {
            updatedPreferredDrivers.push(obj);
        });

        let updatedLimitations = [];
        this.updateClient.value.limitations.forEach(obj => {
            updatedLimitations.push(obj);
        });

        this.clientModel = new ClientImpl();

        this.clientModel.firstName = this.updateClient.value.firstname;
        this.clientModel.lastName = this.updateClient.value.lastname;
        this.clientModel.email = this.updateClient.value.email;
        this.clientModel.phoneNumber = this.updateClient.value.phoneNumber;
        this.clientModel.street = this.updateClient.value.street;
        this.clientModel.houseNumber = this.updateClient.value.houseNumber;
        this.clientModel.zipCode = this.updateClient.value.zipCode;
        this.clientModel.residence = this.updateClient.value.residence;
        this.clientModel.dateOfBirth = this.updateClient.value.dateOfBirth;
        this.clientModel.limitations = updatedLimitations;
        this.clientModel.utility = new UtilityImpl(0, this.updateClient.value.utility),
            this.clientModel.careInstitution = new CareInstitutionImpl('test');
        this.clientModel.companion = this.updateClient.value.companion,
            this.clientModel.preferredDrivers = updatedPreferredDrivers;

        this.editClient(this.clientModel);
        location.reload();
    }

    deleteClient(client: Client): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.clientService.deleteClient(id)
            .subscribe(data => this.client = client,
                error => this.errorMessage = error);
        window.location.href = './clients';
       }
}
