import { Component, OnInit } from '@angular/core';
import { ArtnetService } from './core/services/artnet/artnet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private artnetService: ArtnetService
  ) { }
  async ngOnInit() {
    
  }
}
