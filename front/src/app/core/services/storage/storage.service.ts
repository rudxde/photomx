import { Injectable } from '@angular/core';
// import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StorageService {

  comanderStorageUrl = 'http://localhost:5000/Storage';

  constructor(
    private httpClient: HttpClient
  ) {

  }

  async readFile(Type: String, Entry: String): Promise<String> {
    return await this.httpClient.get<string>(`${this.comanderStorageUrl}/${Type}/${Entry}`).toPromise();
  }

  async writeFile(Type: String, Entry: String, Content: String): Promise<void> {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    await this.httpClient.post(
      `${this.comanderStorageUrl}/${Type}/${Entry}`,
      JSON.stringify(Content),
      options
    ).toPromise();
  }

  async getFiles(Type: String): Promise<string[]> {
    return await this.httpClient.get<string[]>(`${this.comanderStorageUrl}/${Type}`).toPromise();
  }

}
