import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { MusicCardComponent } from './music-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [],
  entryComponents: [ MusicCardComponent ]
})
export class MusicCardModule { }
