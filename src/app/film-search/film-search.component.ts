import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit  {
  filmNameSearch: string ;
  visualTypeOfCard: string = "1" ;
  
  //  viewTypeOfCard = [
  //   {value: '1', viewValue: 'Детально'},
  //   {value: '2', viewValue: 'Компактно'}
  // ];

  ngOnInit() {
    this.filmNameSearch = "Matrix";
    this.getNewFilms(this.filmNameSearch);
    this. visualTypeOfCard = "1";
    this.selectNewView(this.visualTypeOfCard);

  }

  
  @Output()
  getFilmsEvent = new EventEmitter ();

  @Output()
  selectViewEvent = new EventEmitter ();


  constructor() { }

  
  getNewFilms (filmNameSearch:string): void {
    this.getFilmsEvent.emit(this.filmNameSearch);
  }

  selectNewView(visualTypeOfCard:string): void {
    this.selectViewEvent.emit(this.visualTypeOfCard);
    console.log(this.visualTypeOfCard);
  }
 
}
