import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private http: Http
  ) { }
  async ngOnInit() {
    await this.http.put('http://localhost:9070/ARTNET', []).toPromise();
  }
}
