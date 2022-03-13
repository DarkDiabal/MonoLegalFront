import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from 'src/app/shared/material/material/material.module';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    HttpClientModule,
    InvoiceRoutingModule,
    NgxSpinnerModule
  ],
  providers: [
    MaterialModule
  ], schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class InvoiceModule { }
