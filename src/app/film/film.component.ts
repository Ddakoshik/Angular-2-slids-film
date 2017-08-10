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
  loading: boolean;
  scrollme: any;
  yScrol: number;

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
  this.loading = true;
  this.pageUrl++
  console.log(this.pageUrl)
  this.filmService.addFilmsServis(this.filmName, this.pageUrl).subscribe(
    data =>{ this.filmList = this.filmList.concat(data);},
  err => { console.log(err); },
  () => {this.loading = false;}) 
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

  // прокрутка вверх страницы
   runScroll() {
     this.yScrol = window.pageYOffset || document.documentElement.scrollTop;
    // if (!this.yScrol)
    do {
      setTimeout(function() {
        this.yScrol = this.yScrol - 100;
        }, 1000);
        console.log(this.yScrol);
        window.scrollTo(this.yScrol,0);

  
} while (this.yScrol = 0);
    

  // window.scrollTo(this.yScrol,0);
     
  console.log("Vverx");

// window.onscroll = function() {
//   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   document.getElementById('showScroll').innerHTML = scrolled + 'px';
// }

}
 

  

}
