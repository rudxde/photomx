import { IArtnetPatch } from './IArtnetPatch';
import { IChannel } from './IChannel';

export interface IFixture {
  patch: IArtnetPatch;
  channels: IChannel[];

  tick(): void;
}
