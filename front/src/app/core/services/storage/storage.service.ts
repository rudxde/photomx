import { Injectable } from '@angular/core';
// import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class StorageService {


    constructor (
        private httpClient: HttpClient
    ) {

    }

    async readFile(type: String, entry: String): Promise<String> {
        return await this.httpClient.get<string>(`${environment.apiEndpoints.storage}/${type}/${entry}`).toPromise();
    }

    async writeFile(type: String, entry: String, content: String): Promise<void> {
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        await this.httpClient.post(
            `${environment.apiEndpoints.storage}/${type}/${entry}`,
            JSON.stringify(content),
            options
        ).toPromise();
    }

    async getFiles(type: String): Promise<string[]> {
        return await this.httpClient.get<string[]>(`${environment.apiEndpoints.storage}/${type}`).toPromise();
    }

}
