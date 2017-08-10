import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { FilmService } from '../film/film.service'

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit  {
  filmNameSearch: string ;
  visualTypeOfCard: string = "1" ;
  
  // Автоинвайт начало 
  stateCtrl: FormControl;
  filteredStates: any;


  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
   
  ];

  heroForm = new FormGroup ({
    name: new FormControl()
  });

  constructor(private filmService: FilmService) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterStates(name));
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.states;
  }

  autocomplitFilms(filmNameSearch:string){
       setTimeout(this.timeFanck(filmNameSearch), 5000); 
    }
  

  timeFanck(filmNameSearch:string){
     console.log("ok");
     console.log(this.filmNameSearch);
     this.filmService.getFilms(this.filmNameSearch).subscribe(
       data =>{this.states = this.states.concat(data.map(film => film.Title));
      //  data =>{ this.filmList = this.filmList.concat(data);},
       
    })
  }
    // конец автоинвайта


  

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



  
  getNewFilms (filmNameSearch:string): void {
    this.getFilmsEvent.emit(this.filmNameSearch);
  }

  selectNewView(visualTypeOfCard:string): void {
    this.selectViewEvent.emit(this.visualTypeOfCard);
    console.log(this.visualTypeOfCard);
  }
 
}
