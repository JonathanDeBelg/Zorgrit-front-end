import {Client} from '../client/client.interface.model';
import {Clients} from './clients.interface.model';

export class ClientsImpl implements Clients {
    clients: Client[];
    length: number;

    constructor() {
        this.clients = [];
        this.length = 0;
    }
}
