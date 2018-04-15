import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
@Injectable()
export class StorageService {

  comanderStorageUrl = 'http://localhost:5000/Storage';

  constructor(
    private http: Http
  ) {

  }

  async readFile(Type: String, Entry: String): Promise<String> {
    return await this.http.get(`${this.comanderStorageUrl}/${Type}/${Entry}`).toPromise().then(result => {
      return result.text();
    });
  }

  async writeFile(Type: String, Entry: String, Content: String): Promise<void> {
    const header = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: header });
    await this.http.post(
      `${this.comanderStorageUrl}/${Type}/${Entry}`,
      JSON.stringify(Content),
      options
    ).toPromise().then(() => { });
  }

  async getFiles(Type: String): Promise<String[]> {
    return await this.http.get(`${this.comanderStorageUrl}/${Type}`).toPromise().then(result => {
      return JSON.parse(result.text());
    });
  }

}
