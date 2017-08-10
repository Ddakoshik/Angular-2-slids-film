import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmService {
  searchUrl: string = "http://www.omdbapi.com/?page=";
  filmUrl: string = "http://www.omdbapi.com/?i=";
  apiKay: string = "&apikey=520bbe17";
  pageUrl: number = 1;

   constructor(private http: Http) { }

  private extractListData(res: Response) {
    let body = res.json();
    return body.Search || {};
  }

  private extractItemData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getFilms (filmName: string) {
    return this.http.get(this.searchUrl + this.pageUrl + '&s=' + filmName + this.apiKay).map(this.extractListData);
  }

  getFilmById (filmId: string) {
    return this.http.get(this.filmUrl + filmId + this.apiKay).map(this.extractItemData);
  }

  addFilmsServis(filmName: string, pageUrl: number){
    return this.http.get(this.searchUrl + pageUrl + '&s=' + filmName + this.apiKay).map(this.extractListData);
  }

  autocomplitFilm(filmNameSearch: string){
     return this.http.get(this.searchUrl + this.pageUrl + '&s=' + filmNameSearch + this.apiKay).map(this.extractListData);
  }

}

  




  
 
