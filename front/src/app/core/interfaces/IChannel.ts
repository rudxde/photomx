import { ICueble } from './ICueble';
import { IGlobalObject } from './global-object';

export interface IChannel {
    value: ICueble;
    default: ICueble;
}
