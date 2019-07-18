import {HttpClientModule} from '@angular/common/http';
import {ClientService} from './services/client/client.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';

import {ClientsComponent} from './components/clients/clients.component';
import {ClientComponent} from './components/client/client.component';
import {DriverComponent} from './components/driver/driver.component';
import {DriversComponent} from './components/drivers/drivers.component';
import {DriverService} from './services/driver/driver.service';
import {CareInstitutionComponent} from './components/care-institution/care-institution.component';
import {CareInstitutionsComponent} from './components/care-institutions/care-institutions.component';
import {RideComponent} from './components/ride/ride.component';
import {RidesComponent} from './components/rides/rides.component';
import {RideService} from './services/ride/ride.service';
import {NewDriverComponent} from './components/new-driver/new-driver.component';
import {NotMatchedRidesComponent} from './components/not-matched-rides/not-matched-rides.component';
import {MatchedRidesComponent} from './components/matched-rides/matched-rides.component';
import {NewClientComponent} from './components/new-client/new-client.component';
import { MatchRideDriverComponent } from './components/match-ride-driver/match-ride-driver.component';

@NgModule({
    declarations: [
        AppComponent,
        RideComponent,
        RidesComponent,
        ClientsComponent,
        ClientComponent,
        DriverComponent,
        DriversComponent,
        CareInstitutionComponent,
        CareInstitutionsComponent,
        NewDriverComponent,
        MatchedRidesComponent,
        NotMatchedRidesComponent,
        NewClientComponent,
        MatchRideDriverComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger'
        })
    ],
    providers: [
        RideService,
        ClientService,
        DriverService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
