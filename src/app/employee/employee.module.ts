import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNeedypersonComponent } from './add-needyperson/add-needyperson.component';
import { EditNeedypersonComponent } from './edit-needyperson/edit-needyperson.component';
import { ListNeedypersonComponent } from './list-needyperson/list-needyperson.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    AddNeedypersonComponent,
    EditNeedypersonComponent,
    ListNeedypersonComponent

  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    FormsModule
  ],
  exports: [ AddNeedypersonComponent,
    EditNeedypersonComponent,
    ListNeedypersonComponent
  ]

})
export class EmployeeModule { }
