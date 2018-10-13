import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  // moods: Moods = [
  //   { icon: faCoffee, title: 'Coffee break' };
  //   { icon: faUmbrella , title: 'Rainy day' },
  //   { icon: faMoon, title: 'Party night' },
  //   { icon: faSun , title: 'Sunset' },
  //   { icon: faUmbrellaBeach , title: 'Relax at the beach' },
  //   { icon: faDrum , title: 'Punk' }
  // ]
  
  icon = faCoffee;
  title = 'Coffee break';

  constructor() { }

  ngOnInit() {
  }

}
