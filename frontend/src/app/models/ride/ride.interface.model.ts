export interface Ride {
    id: number;
    clientId: number;
    driverId: number;
    preferedDriver: number;
    preferedCareInstitution: number;
    pickUpDateTime: string;
    pickUpLocation: string;
    dropOffLocation: string;
    numberOfCompanions: number;
    numberOfLuggage: number;
    returnRide: boolean;
    callService: boolean;
    utility: string;
    repeatingRideId: number;
    cancelledByClients: boolean;
}
