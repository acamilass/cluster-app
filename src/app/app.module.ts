import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseComponent } from './browse/browse.component';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    HeaderComponent
  ],
  imports: [    
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
