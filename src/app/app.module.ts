import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { SlidComponent } from './slid/slid.component';
import { FilmComponent } from './film/film.component';
import { FilmService } from './film/film.service';
import { Homwork5Component } from './homwork-5/homwork-5.component';
import { TimeHomworkComponent } from './time-homwork/time-homwork.component';
import { FilmSearchComponent } from './film-search/film-search.component';
import { FilmCardComponent } from './film-card/film-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SlidComponent,
    FilmComponent,
    Homwork5Component,
    TimeHomworkComponent,
    FilmSearchComponent,
    FilmCardComponent
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
