import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseComponent } from './browse/browse.component';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    HeaderComponent
  ],
  imports: [    
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    SharedModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
