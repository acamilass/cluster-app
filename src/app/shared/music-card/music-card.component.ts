import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {
  
  @Input() cardIcon: any;
  @Input() cardTitle: string;
  @Input() cardImage: any;
   
  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $(".music-card").mouseover(function(){
        $(".music-card").css("opacity", 1);
        $(this).css("opacity", 0.3);
      })
      // $(".music-card").mouseover(function(){
      //   $(this).css("border-style", "none");
      //   $(".music-card").css("border", "solid #FFF");
        
      // })
            
    })

  }

}