import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  declarations: []
})
export class MaterialModule { }
