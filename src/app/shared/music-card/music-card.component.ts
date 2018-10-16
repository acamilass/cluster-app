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

    jQuery(document).ready(function($){
      $('.fdw-background').hover(
        function () {
          $(this).animate({opacity:'0.2'});
        },
        function () {
          $(this).animate({opacity:'0.9'});
        }
      ); 
    });
    
  }

}