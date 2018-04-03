import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ArtnetService {

  comanderArntetUrl = 'http://localhost:5000/Artnet';

  public Universe0: number[];

  constructor(
    private http: Http
  ) {
    this.Universe0 = new Array(512).fill(0);
    console.log('ArtnetService starting');
    this.addArtnetClient('192.168.178.24', 0);
    this.sendArtnetTask();
  }

  addArtnetClient(ipAddr: string, universe: number) {
    this.http.post(`${this.comanderArntetUrl}/client/${ipAddr}/${universe}`, null).toPromise()
      .then(() => {console.log('ok')})
      .catch(err => console.error(err));
  }

  sendArtnetTask() {
    setInterval(() => {
      this.sendArtnetPackage(0, 0, 0, this.Universe0);
    }, 16);
  }

  sendArtnetPackage(net: number, subnet: number, universe: number, data: number[]) {
    this.http.put(`${this.comanderArntetUrl}/DMX/${universe}`, data).toPromise().then(() => {
    }).catch(err => {
    });
  }

}
