import { Component, OnInit } from '@angular/core';
import { faCoffee, faUmbrella, faMoon, faSun, faUmbrellaBeach, faDrum } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  cards = [
    { icon: faCoffee, title: 'Coffee break' },
    { icon: faUmbrella, title: 'Rainy day' },
    { icon: faMoon, title: 'Party night' },
    { icon: faSun, title: 'Sunset' },
    { icon: faUmbrellaBeach, title: 'Relax at the beach' },
    { icon: faDrum, title: 'Punk' },
  ];
  
  // titles = ['Coffee break', 'Rainy day', 'Party night', 'Sunset', 'Relax at the beach', 'Punk'];
  
  constructor() { }

  ngOnInit() {
  }

}
