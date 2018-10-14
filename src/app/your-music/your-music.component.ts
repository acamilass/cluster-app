import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-your-music',
  templateUrl: './your-music.component.html',
  styleUrls: ['./your-music.component.scss']
})
export class YourMusicComponent implements OnInit {

  cards = [
    { icon: '../../../assets/icons/bed-solid.svg', title: 'Sleep time', image: '../../../assets/sleep.jpg' }
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
