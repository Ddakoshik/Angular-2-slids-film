import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../film/film.service';


@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input()
  filmId: string;
  filmItem:{} = {};
  
  @Input()
  visualTypeOfCard: number;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    if (!this.filmId) {return;}
    this.filmService.getFilmById(this.filmId).subscribe(data => {
      this.filmItem = data;
      console.log(data);
    })
  }

}
