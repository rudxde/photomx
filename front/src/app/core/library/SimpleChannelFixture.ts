import { IFixture } from '../interfaces/IFixture';
import { IArtnetPatch } from '../interfaces/IArtnetPatch';
import { IChannel } from '../interfaces/IChannel';
import { ArtnetService } from '../services/artnet/artnet.service';
import { IArtnetData } from '../interfaces/IArtnetData';
import { GlobalObjectsService } from '../services/global-objects/global-objects.service';

export class SimpleChannelFixture implements IFixture {
    type: 'fixture' = 'fixture';
    gid: string;
    patch: IArtnetPatch;
    channels: IChannel[];
    artnetData: IArtnetData;
    constructor(
        public name: String,
        size: number,
        private artnetService: ArtnetService,
        private globalObjectService: GlobalObjectsService,
    ) {
        this.patch = {
            artnet: 0,
            length: size,
            startAdress: 0,
            subnet: 2,
        };
        this.channels = [];
        for (let i = 0; i < size; i++) {
            this.channels.push({ default: null, value: null });
        }
        this.artnetData = this.artnetService.requestArtnetData(this.patch);
        this.globalObjectService.addNew(this);
    }
    tick(): void {
        for (let i = 0; i < this.channels.length; i++) {
            this.artnetData.data[this.patch.startAdress + i] =
                this.channels &&
                this.channels[i] &&
                this.channels[i].value &&
                this.channels[i].value.getValue()
                || 0;
        }
    }
}
