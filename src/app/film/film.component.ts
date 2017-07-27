import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from './film.service'

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent  {
  filmList : Object[] = []
  filmName: string;
  constructor(private filmService: FilmService) { }
  

  @Input()
  filmNameSearch: string = "11";
  
buildGaleryBySearch(filmNameSearch: string){
  this.filmName = filmNameSearch;
  this.getFilms();
}
  private getFilms(){
    if (!this.filmName) {return; }
    this.filmService.getFilms(this.filmName).subscribe(data =>{
      this.filmList = data;
    })
  }

}
