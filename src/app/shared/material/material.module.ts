import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
