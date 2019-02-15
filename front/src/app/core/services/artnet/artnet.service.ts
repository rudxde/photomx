import { Injectable } from '@angular/core';
import { IArtnetData } from '../../interfaces/IArtnetData';
import { IArtnetPatch } from '../../interfaces/IArtnetPatch';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable()
export class ArtnetService {


    artnetData: IArtnetData[];

    constructor(
        private httpClient: HttpClient
    ) {
        this.artnetData = [];
    }

    addArtnetClient(ipAddr: string, artnet: number, subnet: number) {
        this.httpClient.post(`${environment.apiEndpoints.artnet}/client/${ipAddr}/${artnet}:${subnet}`, null).toPromise()
            .then(() => console.debug(`Successfully added ${ipAddr} to ${artnet}:${subnet}`))
            .catch(console.error);
    }

    public requestArtnetData(patch: IArtnetPatch): IArtnetData {
        for (const i of this.artnetData) {
            if (i.artnet === patch.artnet && i.subnet === patch.subnet) {
                return i;
            }
        }

        const newData = {
            artnet: patch.artnet,
            subnet: patch.subnet,
            data: new Array(512).fill(0)
        };
        this.artnetData.push(newData);
        return newData;
    }

    sendArtnet() {
        this.artnetData
            .map(x => {
                return {
                    artnet: x.artnet,
                    subnet: x.subnet,
                    data: x.data.map(y => Math.floor(y)).join(','),
                };
            })
            .forEach(async ad => {
                await this.httpClient.put(`${environment.apiEndpoints.artnet}/DMX/`, ad).toPromise();
            });
    }
}
