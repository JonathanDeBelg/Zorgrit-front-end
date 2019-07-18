import {CareInstitution} from './care-institution.interface.model';

export class CareInstitutionImpl implements CareInstitution {
    id: 1;
    name: string;

    constructor(name : string){
        this.id = 1;
        this.name = name;
    }
}