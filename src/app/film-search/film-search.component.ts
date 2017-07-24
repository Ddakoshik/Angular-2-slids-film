import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {
  filmNameSearch: string;
  
  @Output()
  getFilms = new EventEmitter<string> ();


  constructor() { }
  ngOnInit() {
  }
  
  getNewFilms (filmNameSearch:string): void {
    this.getFilms.emit(filmNameSearch);
  }
 
}
