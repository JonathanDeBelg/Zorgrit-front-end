import {CareInstitution} from 'src/app/models/care-institution/care-institution.interface.model';
import {Limitations} from './../../models/limitations/limitations.interface.model';
import {Client} from './../../models/client/client.interface.model';
import {Injectable} from '@angular/core';
import {Clients} from '../../models/clients/clients.interface.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilities} from 'src/app/models/utilities/utilities.interface.model';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    protected headers = new HttpHeaders().set('Content-Type', 'application/json');
    private url = 'http://localhost:8080/zorgrit_war/v0.2/client/';

    careInstitution: CareInstitution;


    constructor(private http: HttpClient) {
    }

    public getLimitations(): Observable<Limitations> {
        try {
            return this.http.get<Limitations>(this.url + 'limitations');
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public getUtilities(): Observable<Utilities> {
        try {
            return this.http.get<Utilities>(this.url + 'utilities');
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public getClients(): Observable<Clients> {
        const endpointUrl: string = this.url + 'careInstitution/' + 1;
        try {
            return this.http.get<Clients>(endpointUrl);
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public getClient(id: number): Observable<Client> {
        try {
            return this.http.get<Client>(this.url + id);
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public createClient(client: Client): Observable<string> {
        const createClientBody = JSON.stringify(client);
        try {
            return this.http.post<string>(this.url, createClientBody,
                {
                    headers: this.headers
                });
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public editClient(client: Client, id: number): Observable<Client> {
        try {
            return this.http.put<Client>(this.url + id, client);
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public deleteClient(id: number): Observable<Client> {
        try {
            return this.http.delete<Client>(this.url + id);
        } catch (err) {
            this.errorHandler(err);
        }
    }

    errorHandler(error: HttpErrorResponse) {
        console.log(error.message);
        return Observable.throw(error.message || 'Server error');
    }
}
