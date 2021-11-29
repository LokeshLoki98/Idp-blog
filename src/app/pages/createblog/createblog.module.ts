import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateblogRoutingModule } from './createblog-routing.module';
import { CreateblogComponent } from './createblog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateblogComponent
  ],
  imports: [
    CommonModule,
    CreateblogRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateblogModule { }
