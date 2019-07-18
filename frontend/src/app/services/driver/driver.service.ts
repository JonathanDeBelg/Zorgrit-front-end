import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Drivers} from 'src/app/models/drivers/drivers.interface.model';
import {Driver} from 'src/app/models/driver/driver.interface.model';
import {Observable} from 'rxjs';
import { DriverImpl } from 'src/app/models/driver/driver.model';

@Injectable({
    providedIn: 'root'
})

export class DriverService {

    protected headers = new HttpHeaders().set('Content-Type', 'application/json');
    private url = 'http://localhost:8080/zorgrit_war/v0.2/driver/';

    constructor(private http: HttpClient) {
    }

    public getDriversCareInstitution(careInstitution: number): Observable<Drivers> {
        const endpointUrl: string = this.url + "careInstitution/" + careInstitution;
        try {
            return this.http.get<Drivers>(endpointUrl);
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public getDrivers(): Observable<Drivers> {
        const endpointUrl: string = this.url;
        try {
            return this.http.get<Drivers>(endpointUrl);
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public getDriver(driver: number): Observable<Driver> {
        const endpointUrl: string = this.url + driver;

        try {
            return this.http.get<Driver>(endpointUrl);
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public createDriver(driver: Driver): Observable<string> {
        const createDriverBody = JSON.stringify(driver);

        try {
            return this.http.post<string>(this.url, createDriverBody,
                {
                    headers: this.headers
                }
            );
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public editDriver(driver: Driver, id: number): Observable<Driver> {
        try {
            return this.http.put<Driver>(this.url + id, driver);
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public deleteDriver(id: number): Observable<Driver> {
        try {
            return this.http.delete<Driver>(this.url + id);
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public getPreferredDrivers(clientId: number): Observable<Array<DriverImpl>>{
        try {
            return this.http.get<Array<DriverImpl>>(this.url + clientId + '/preferreddrivers/');
        } catch (err) {
            this.errorHandler(err);
        }
    }

    errorHandler(error: HttpErrorResponse) {
        console.log(error.message);
        return Observable.throw(error.message || 'Server error');
    }
}
