import { Injectable } from '@angular/core';
import { IGlobalObject } from '../../interfaces/global-object';

@Injectable({
    providedIn: 'root'
})
export class GlobalObjectsService {

    countingTypeNumbers: Map<string, number>;

    globalObjects: any = {};
    globalObjectsTypes: any = {};

    constructor() {
        (window as any).GlobalObjects = this.globalObjects;
        (window as any).GlobalObjectsTypes = this.globalObjectsTypes;
        this.countingTypeNumbers = new Map();
    }

    addNew(globalObject: IGlobalObject): void {
        globalObject.type = globalObject.type || 'undefined';

        if (!this.countingTypeNumbers.has(globalObject.type)) {
            this.countingTypeNumbers.set(globalObject.type, 0);
        }
        // tslint:disable-next-line: no-unsafe-any
        if (!this.globalObjectsTypes[globalObject.type]) {
            // tslint:disable-next-line: no-unsafe-any
            this.globalObjectsTypes[globalObject.type] = {};
        }

        globalObject.gid = globalObject.type + '_' + this.countingTypeNumbers.get(globalObject.type);
        this.countingTypeNumbers.set(globalObject.type, this.countingTypeNumbers.get(globalObject.type) + 1);
        // add obejct to GlobalObjects object
        // tslint:disable-next-line: no-unsafe-any
        this.globalObjects[globalObject.gid] = globalObject;
        // tslint:disable-next-line: no-unsafe-any
        this.globalObjectsTypes[globalObject.type][globalObject.gid] = globalObject;
    }

}
