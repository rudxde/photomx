import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IArtnetData } from '../../interfaces/IArtnetData';
import { IArtnetPatch } from '../../interfaces/IArtnetPatch';
@Injectable()
export class ArtnetService {

  comanderArntetUrl = 'http://localhost:5000/Artnet';

  artnetData: IArtnetData[];

  constructor(
    private http: Http
  ) {
    this.artnetData = [];
  }

  addArtnetClient(ipAddr: string, artnet: number, subnet: number) {
    this.http.post(`${this.comanderArntetUrl}/client/${ipAddr}/${artnet}:${subnet}`, null).toPromise()
      .then(() => { console.debug(`Successfully added ${ipAddr} to ${artnet}:${subnet}`); })
      .catch(err => console.error(err));
  }

  public requestArtnetData(patch: IArtnetPatch): IArtnetData {
    for (let i of this.artnetData) {
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
        await this.http.put(`${this.comanderArntetUrl}/DMX/`, ad).toPromise();
      });
  }
}
