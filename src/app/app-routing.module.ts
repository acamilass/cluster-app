import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { YourMusicComponent } from './your-music/your-music.component';

const routes: Routes = [

  {
    path: '',
    component: BrowseComponent
  },
  
  {
    path: 'browse',
    component: BrowseComponent
  },

  {
    path: 'your-music',
    component: YourMusicComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
