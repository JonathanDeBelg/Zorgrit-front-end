import {CareInstitutionsComponent} from './components/care-institutions/care-institutions.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from './components/clients/clients.component';
import {ClientComponent} from './components/client/client.component';
import {DriverComponent} from './components/driver/driver.component';
import {DriversComponent} from './components/drivers/drivers.component';
import {RidesComponent} from './components/rides/rides.component';
import {RideComponent} from './components/ride/ride.component';
import {NewDriverComponent} from './components/new-driver/new-driver.component';
import {MatchedRidesComponent} from './components/matched-rides/matched-rides.component';
import {NotMatchedRidesComponent} from './components/not-matched-rides/not-matched-rides.component';
import {NewClientComponent} from './components/new-client/new-client.component';
import { MatchRideDriverComponent } from './components/match-ride-driver/match-ride-driver.component';

const routes: Routes = [
    {path: '', redirectTo: 'rides', pathMatch: 'full'},
    {path: 'drivers', component: DriversComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'drivers/new', component: NewDriverComponent},
    {path: 'clients/:id/delete', component: ClientsComponent},
    {path: 'clients/new', component: NewClientComponent},
    {path: 'clients/:id', component: ClientComponent},
    {path: 'drivers/:id/delete', component: DriverComponent},
    {path: 'drivers/:id', component: DriverComponent},
    {path: 'rides', component: RidesComponent},
    {path: 'ride/:id', component: RideComponent},
    {path: 'care-institutions', component: CareInstitutionsComponent},
    {path: 'rides/matched', component: MatchedRidesComponent},
    {path: 'rides/not-matched', component: NotMatchedRidesComponent},
    {path: 'matchride/:id', component: MatchRideDriverComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
