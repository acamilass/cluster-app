import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YourMusicComponent } from './your-music.component';

const routes: Routes = [

  {
    path: 'your-music',
    component: YourMusicComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourMusicRoutingModule { }
