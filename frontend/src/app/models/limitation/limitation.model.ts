import {Limitation} from './limitation.interface.model';

export class LimitationImpl implements Limitation {
    name: String;

    constructor(name: string){
        this.name = name;
    }
}
