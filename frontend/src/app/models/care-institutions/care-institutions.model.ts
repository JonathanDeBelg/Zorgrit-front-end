import {CareInstitution} from '../care-institution/care-institution.interface.model';
import {CareInstitutions} from './care-institutions.interface.model';

export class CareInstitutionsImpl implements CareInstitutions {
    careInstitutions: CareInstitution[];


    constructor(){
        this.careInstitutions = [];
    }
}