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
  rowHeightCange: string = "1000px";
  typeOfCard: string;
  pageUrl: number = 1;

  constructor(private filmService: FilmService) { }

  @Input()
  filmNameSearch: string = "";
  
buildGaleryBySearch(filmNameSearch: string){
  this.filmName = filmNameSearch;
  this.getFilms(this.filmName);
}

selectCard(visualTypeOfCard :string) : void{
  this.typeOfCard = visualTypeOfCard
  this.setRowHeight(visualTypeOfCard);
}

addFilms(){
  this.pageUrl++
  this.getFilms(this.pageUrl);
  console.log(this.pageUrl)
  this.filmService.addFilmsServis(this.filmName, this.pageUrl).subscribe(data =>{
      this.filmList = this.filmList.concat(data);
    })
}


setRowHeight (filmNameSearch: string): void {
  filmNameSearch === "1" ? this.rowHeightCange = "1000px" : this.rowHeightCange = "450px"
}
  private getFilms(pageUrl){
    if (!this.filmName) {return; }
    this.filmService.getFilms(this.filmName).subscribe(data =>{
      this.filmList = data;
    })
  }

  

}
