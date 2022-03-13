import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
