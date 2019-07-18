import {Limitations} from './limitations.interface.model';
import {Limitation} from '../limitation/limitation.interface.model';


export class LimitationsImpl implements Limitations {
    limitations: Limitation[];

    constructor(limitations: Array<Limitation>) {
        this.limitations = limitations;
    }
}
