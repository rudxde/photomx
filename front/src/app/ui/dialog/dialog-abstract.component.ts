import { Input } from '@angular/core';
import { Subject } from 'rxjs';

export interface DialogAbstractComponentResult<T> {
    isOkResult: () => DialogAbstractComponentOkResult<T> | boolean;
    data?: T;
}

class DialogAbstractComponentOkResult<T> implements DialogAbstractComponentResult<T> {
    isOkResult = () => this; // 'this' is truthy
    constructor(public data: T){}
}

class DialogAbstractComponentAbortResult<T> implements DialogAbstractComponentResult<T> {
    isOkResult = () => false;
}


export abstract class DialogAbstractComponent<T> {
    @Input() result: Subject<DialogAbstractComponentResult<T>>;

    abort() {
        this.result.next(new DialogAbstractComponentAbortResult<T>());
    }

    submit(data: T) {
        this.result.next(new DialogAbstractComponentOkResult<T>(data));
    }
}
