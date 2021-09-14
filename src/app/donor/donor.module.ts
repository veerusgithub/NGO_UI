import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDonorComponent } from './register-donor/register-donor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { ListDonorComponent } from './list-donor/list-donor.component';
import { EditDonorComponent } from './edit-donor/edit-donor.component';



@NgModule({
  declarations: [
    RegisterDonorComponent,
    AddDonorComponent,
    ListDonorComponent,
    EditDonorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RegisterDonorComponent]
})
export class DonorModule { }
