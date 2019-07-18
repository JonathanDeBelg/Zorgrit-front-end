import { Component, OnInit } from "@angular/core";
import { Ride } from "../../models/ride/ride.interface.model";
import { ActivatedRoute } from "@angular/router";
import { RideService } from "../../services/ride/ride.service";
import { DriverImpl } from "../../models/driver/driver.model";
import { DriverService } from "../../services/driver/driver.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RideImpl } from "../../models/ride/ride.model";
@Component({
  selector: "app-match-ride-driver",
  templateUrl: "./match-ride-driver.component.html",
  styleUrls: ["./match-ride-driver.component.scss"]
})
export class MatchRideDriverComponent implements OnInit {
  public ride: Ride;
  updatedRide: Ride;
  public errorMessage;
  public preferredDrivers: Array<DriverImpl>;
  public clientId: number;
  matchRideDriver: FormGroup;
  public rideModel: Ride;
  driverIdUpdated: number;

  constructor(
    private rideService: RideService,
    private driverService: DriverService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getRideToMatch();
    this.matchRideDriver = new FormGroup({
      preferredDrivers: new FormControl("", Validators.required)
    });
  }

  ngAfterViewInit() {
    this.getPreferredDrivers(this.ride.clientId);
  }

  getRideToMatch(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.rideService
      .getRideToMatch(id)
      .subscribe(
        data => (this.ride = data),
        error => (this.errorMessage = error)
      );
  }

  getPreferredDrivers(clientId: number): void {
    this.driverService
      .getPreferredDrivers(clientId)
      .subscribe(
        data => (
          (this.preferredDrivers = data), error => (this.errorMessage = error)
        )
      );
  }

  updateMatchRideToDriver(driverId: number): void {    
    this.rideModel = new RideImpl();
    this.rideModel.driverId = +driverId;
    this.rideModel.id = this.ride.id;

    this.rideService.updateMatchRideToDriver(
      this.ride.id,
      driverId).subscribe(data => this.driverIdUpdated = driverId,
        error => this.errorMessage = error);
        window.location.href = './rides';
  }

  onSubmit() {
    this.updateMatchRideToDriver(this.matchRideDriver.value.preferredDrivers);
  }
}
