import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { MusicCardComponent } from './music-card/music-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule 
  ],
  exports: [
    MaterialModule
  ],
  declarations: [MusicCardComponent]
})
export class SharedModule { }
