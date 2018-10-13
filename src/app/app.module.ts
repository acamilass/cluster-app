import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseComponent } from './browse/browse.component';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { SharedModule } from './shared/shared.module';
import { YourMusicComponent } from './your-music/your-music.component';
import { MusicCardModule } from './shared/music-card/music-card.module';
import { MusicCardComponent } from './shared/music-card/music-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    HeaderComponent,
    YourMusicComponent,
    MusicCardComponent
  ],
  imports: [    
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    SharedModule,
    MusicCardModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
