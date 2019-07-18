import { RestfulZorgritClientService } from './../restful-zorgrit-client.service';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ride} from '../../models/ride/ride.interface.model';
import {RidesInformation} from 'src/app/models/rides-information/rides-information.model';

@Injectable({
    providedIn: 'root'
})
export class RideService extends RestfulZorgritClientService {

    constructor(private http: HttpClient) {
        super();
    }

    public getAllMatchedRides(careInstitution: number): Observable<RidesInformation> {
        const endpointUrl: string = 'http://localhost:8080/zorgrit_war/v0.2/ride/matched/careInstitution/' + careInstitution;

        try {
            return this.http.get<RidesInformation>(endpointUrl);
        } catch (e) {
            this.errorHandler(e);
        }
    }

    public getAllNotMatchedRides(careInstitution: number): Observable<RidesInformation> {
        const endpointUrl: string = 'http://localhost:8080/zorgrit_war/v0.2/ride/notmatched/careInstitution/' + careInstitution;

        try {
            return this.http.get<RidesInformation>(endpointUrl);
        } catch (e) {
            this.errorHandler(e);
        }
    }
    public getAllRides(careInstitution: number): Observable<RidesInformation> {
        const endpointUrl: string = 'http://localhost:8080/zorgrit_war/v0.2/ride/info/careInstitution/' + careInstitution;
        try {
            return this.http.get<RidesInformation>(endpointUrl);
        } catch (err) {
            this.errorHandler(err);
        }
    }

    public getRide(id: number): Observable<Ride> {
        const endpointUrl: string = 'http://localhost:8080/zorgrit_war/v0.2/ride/' + id;

        try {
            return this.http.get<Ride>(endpointUrl, {headers: this.constheaders});
        } catch (e) {
            this.errorHandler(e);
        }
    }

    public getRideToMatch(id: number): Observable<Ride> {
        const endpointUrl: string = 'http://localhost:8080/zorgrit_war/v0.2/ride/notmatched/' + id;
        try {
            return this.http.get<Ride>(endpointUrl);
        } catch (e) {
            this.errorHandler(e);
        }
    }
    public updateMatchRideToDriver(rideId: number, ride: number): Observable<Ride> {
        const endpointUrl: string = 'http://localhost:8080/zorgrit_war/v0.2/ride/notmatched/'+ rideId ;
        try { 
            return this.http.put<Ride>(endpointUrl, ride);
        } catch (e) {
            this.errorHandler(e)    ;
        }
    }

    errorHandler(error: HttpErrorResponse) {
        console.log(error.message);
        return Observable.throw(error.message || 'Server error');
    }
}
