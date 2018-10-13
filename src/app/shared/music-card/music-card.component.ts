import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  titles = ['Coffee break', 'Rainy day', 'Party night', 'Sunset', 'Relax at the beach', 'Punk'];
  
  constructor() { }

  ngOnInit() {
  }

}
