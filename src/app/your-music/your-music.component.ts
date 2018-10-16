import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-your-music',
  templateUrl: './your-music.component.html',
  styleUrls: ['./your-music.component.scss']
})
export class YourMusicComponent implements OnInit {

  @Output() search = new EventEmitter();

  cards = [
    { icon: '../../../assets/icons/bed-solid.svg', title: 'Sleep time', image: '../../../assets/sleep.jpg' }
  ];
 
  constructor() { }

  ngOnInit() { }

  public filterCards() {
    this.search.emit({ res: this.cards.filter});
  }

}
