import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {SimpleHttpRequest} from './simple-http.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, SimpleHttpRequest ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
