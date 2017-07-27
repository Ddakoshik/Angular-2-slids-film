import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit  {
  filmNameSearch: string = '';
  
   foods = [
    {value: 'steak-0', viewValue: 'Детально'},
    {value: 'pizza-1', viewValue: 'Компактно'}
  ];

  ngOnInit() {
    this.filmNameSearch = "Matrix";
    this.getNewFilms(this.filmNameSearch);
  }

  


  @Output()
  getFilmsEvent = new EventEmitter <string> ();


  constructor() { }

  
  getNewFilms (filmNameSearch:string): void {
    this.getFilmsEvent.emit(this.filmNameSearch);
  }
 
}
