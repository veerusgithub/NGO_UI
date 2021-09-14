import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentComponent } from './main-content/main-content.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutComponent } from '../layout/layout.component';



@NgModule({
  declarations: [
    MainContentComponent,
    LayoutComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  exports:[


    MainContentComponent
  ]
})
export class HomeModule { }
