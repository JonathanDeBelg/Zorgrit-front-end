import { CareInstitution } from 'src/app/models/care-institution/care-institution.interface.model';
import { CareInstitutions } from 'src/app/models/care-institutions/care-institutions.interface.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class CareInstitutionService {
  constructor(private http: HttpClient) {
  }

  public getCareInstitutions(): Observable<CareInstitutions> {
    try {
      // return this.http.get<CareInstitutions>('http://localhost:8080/zorgrit_war_exploded/careInstitutions/');
      return this.http.get<CareInstitutions>('./assets/care-institutions.json');
    } catch (err) {
        this.errorHandler(err);
    }
  }

  public getCareInstitution(CareInstitution: number): Observable<CareInstitution> {
    // return this.http.get<CareInstitutions>('http://localhost:8080/zorgrit_war_exploded/careinstitituions/' + id);
      return this.http.get<CareInstitution>('./assets/care-institution.json');
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error.message);
    return Observable.throw(error.message || "Server error");
  }
}
