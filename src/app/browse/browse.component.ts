import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  @Output() search = new EventEmitter();

  cards = [
    { icon: '../../../assets/icons/coffee-solid.svg', title: 'Coffee break', image: '../../../assets/coffee-break.jpg' },
    { icon: '../../../assets/icons/umbrella-solid.svg', title: 'Rainy day', image: '../../../assets/rainy-day.jpg' },
    { icon: '../../../assets/icons/moon-solid.svg', title: 'Party night', image: '../../../assets/party-night.jpg' },
    { icon: '../../../assets/icons/sun-solid.svg', title: 'Sunset', image: '../../../assets/sunset.jpg' },
    { icon: '../../../assets/icons/umbrella-beach-solid.svg', title: 'Beach fever', image: '../../../assets/beach.jpg' },
    { icon: '../../../assets/icons/drum-solid.svg', title: 'Punk', image: '../../../assets/punk.jpg' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

  public filterCards() {
    this.search.emit({ res: this.cards.filter});
  }

}
