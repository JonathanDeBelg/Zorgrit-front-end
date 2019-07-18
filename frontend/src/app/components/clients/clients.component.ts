import {Clients} from './../../models/clients/clients.interface.model';
import {ClientService} from './../../services/client/client.service';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
    public clients: Clients;
    interval: any;

    constructor(private clientService: ClientService) {
    }

    ngOnInit() {
        this.refreshData();
        this.interval = setInterval(() => {
            this.refreshData();
        }, 1000);
    }

    refreshData() {
        this.clientService.getClients()
            .subscribe(data => this.clients = data);
    };
}
