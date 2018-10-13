import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MusicCardModule } from '../shared/music-card/music-card.module';
import { MusicCardComponent } from '../shared/music-card/music-card.component';

@NgModule({
  imports: [
    CommonModule,
    BrowseRoutingModule,
    SharedModule,
    MusicCardModule 
  ],
  declarations: [
    MusicCardComponent
  ]
})
export class BrowseModule { }
