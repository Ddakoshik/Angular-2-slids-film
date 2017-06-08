import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homwork-5',
  templateUrl: './homwork-5.component.html',
  styleUrls: ['./homwork-5.component.css']
})
export class Homwork5Component implements OnInit {

   title: string = 'Каталог фильмов JSExpert';

  links = [
    { path: '/dashboard', icon: 'home', label: 'Главная'},
    { path: '/filmList', icon: 'list', label: 'Все фильмы'},
    { path: '/profile', icon: 'account_circle', label: 'Профиль'}
  ];

  constructor() { }

  ngOnInit() {
  }

}




