import { Component, OnInit } from '@angular/core';
import { faCoffee, faUmbrella, faMoon, faSun, faUmbrellaBeach, faDrum } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  cards = [
    { icon: '../../../assets/icons/coffee-solid.svg', title: 'Coffee break' },
    { icon: '../../../assets/icons/umbrella-solid.svg', title: 'Rainy day' },
    { icon: '../../../assets/icons/moon-solid.svg', title: 'Party night' },
    { icon: '../../../assets/icons/sun-solid.svg', title: 'Sunset' },
    { icon: '../../../assets/icons/umbrella-beach-solid.svg', title: 'Relax at the beach' },
    { icon: '../../../assets/icons/drum-solid.svg', title: 'Punk' },
  ];
   
  constructor() { }

  ngOnInit() {
  }

}
