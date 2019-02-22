import { IArtnetPatch } from './IArtnetPatch';
import { IChannel } from './IChannel';

export interface IFixture {
    name: String;
    patch: IArtnetPatch;
    channels: IChannel[];

    tick(): void;
}
