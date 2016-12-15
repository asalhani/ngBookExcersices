import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailsComponent } from './hero-detail.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, HeroDetailsComponent, HeroesComponent, DashboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
