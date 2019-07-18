import {Utilities} from './utilities.interface.model';
import {Utility} from '../utility/utility.interface.model';


export class UtilitiesImpl implements Utilities {
    utilities: Utility[];

    constructor() {
        this.utilities = [];
    }
}
