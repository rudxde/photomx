import { Injectable } from '@angular/core';
import { IArtnetData } from '../../interfaces/IArtnetData';
import { IArtnetPatch, IArtnetDefinition } from '../../interfaces/IArtnetPatch';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ArtnetService {


    artnetData: IArtnetData[];

    constructor(
        private httpClient: HttpClient
    ) {
        this.artnetData = [];
    }

    async addArtnetClient(client: IArtnetClient): Promise<void> {
        await this.httpClient.post(
            `${environment.apiEndpoints.artnet}/client/${client.ip}/${client.artnetDefinition.artnet}:${client.artnetDefinition.subnet}`, null
        )
            .toPromise()
            .then(() => console.debug(`Successfully added ${client.ip} to ${client.artnetDefinition.artnet}:${client.artnetDefinition.subnet}`))
            .catch(console.error);
    }

    async removeArtnetClient(client: IArtnetClient) {
        await this.httpClient.delete(
            `${environment.apiEndpoints.artnet}/client/${client.ip}/${client.artnetDefinition.artnet}:${client.artnetDefinition.subnet}`
        )
            .toPromise()
            .then(() => console.debug(`Successfully removed ${client.ip} to ${client.artnetDefinition.artnet}:${client.artnetDefinition.subnet}`))
            .catch(console.error);
    }

    async getArtnetClientList(): Promise<IArtnetClient[]> {
        const artnetClients: ICommanderArtnetClient[] = await this.httpClient.get<ICommanderArtnetClient[]>(`${environment.apiEndpoints.artnet}/client/`)
            .toPromise();
        return artnetClients.map(x => (<IArtnetClient>{
            ip: x.ip,
            artnetDefinition: {
                artnet: x.artnet,
                subnet: x.subnet,
            }
        }));
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
            .map(x => ({
                artnet: x.artnet,
                subnet: x.subnet,
                data: x.data.map(y => Math.floor(y)).join(','),
            }))
            .forEach(async ad => {
                await this.httpClient.put(`${environment.apiEndpoints.artnet}/DMX/`, ad).toPromise();
            });
    }
}

interface ICommanderArtnetClient {
    ip: string;
    artnet: number;
    subnet: number;
}

export interface IArtnetClient {
    ip: string;
    artnetDefinition: IArtnetDefinition;
}
