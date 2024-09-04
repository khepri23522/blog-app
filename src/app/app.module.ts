import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {Component} from '@angular/core';

import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, MatFormFieldModule, MatInputModule,MatCardModule,FormsModule,
     MatFormFieldModule, MatInputModule,MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule,
     MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
