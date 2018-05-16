import { IFixture } from '../interfaces/IFixture';
import { IArtnetPatch } from '../interfaces/IArtnetPatch';
import { IChannel } from '../interfaces/IChannel';
import { ArtnetService } from '../services/artnet/artnet.service';
import { IArtnetData } from '../interfaces/IArtnetData';

export class SimpleChannelFixture implements IFixture {
    patch: IArtnetPatch;
    channels: IChannel[];
    artnetData: IArtnetData;
    constructor(
        size: number,
        private artnetService: ArtnetService
    ) {
        this.channels.fill({ default: null, value: null }, 1, size);
        this.artnetData = this.artnetService.requestArtnetData(this.patch);
    }
    tick(): void {
        for (let i = 0; i < this.channels.length; i++) {
            this.artnetData.data[this.patch.startAdress + i] = this.channels[i].value.getValue();
        }
    }
}
