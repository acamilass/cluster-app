import { Component, OnInit } from '@angular/core';
// import { faCoffee, faUmbrella, faMoon, faSun, faUmbrellaBeach, faDrum } from '@fortawesome/free-solid-svg-icons';

import * as $ from 'jquery';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  cards = [
    { icon: '../../../assets/icons/coffee-solid.svg', title: 'Coffee break', image: '../../../assets/coffee-break.jpg' },
    { icon: '../../../assets/icons/umbrella-solid.svg', title: 'Rainy day', image: '../../../assets/rainy-day.jpg' },
    { icon: '../../../assets/icons/moon-solid.svg', title: 'Party night', image: '../../../assets/party-night.jpg' },
    { icon: '../../../assets/icons/sun-solid.svg', title: 'Sunset', image: '../../../assets/sunset.jpg' },
    { icon: '../../../assets/icons/umbrella-beach-solid.svg', title: 'Beach fever', image: '../../../assets/beach.jpg' },
    { icon: '../../../assets/icons/drum-solid.svg', title: 'Punk', image: '../../../assets/punk.jpg' },
    { icon: '../../../assets/icons/bed-solid.svg', title: 'Sleep time', image: '../../../assets/sleep.jpg' },
  ];
   
  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $(".music-card").mouseover(function(){
        $(".music-card").css("opacity", 1);
        $(this).css("opacity", 0.3);
      })
      
    })

  }

}