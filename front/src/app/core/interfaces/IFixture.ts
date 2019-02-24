import { IArtnetPatch } from './IArtnetPatch';
import { IChannel } from './IChannel';
import { IGlobalObject } from './global-object';

export interface IFixture extends IGlobalObject {
    type: 'fixture';
    name: String;
    patch: IArtnetPatch;
    channels: IChannel[];

    tick(): void;
}
