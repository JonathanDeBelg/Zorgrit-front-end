import {Utility} from './utility.interface.model';

export class UtilityImpl implements Utility {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
    }
}