import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slid',
  templateUrl: './slid.component.html',
  styleUrls: ['./slid.component.css']
})
export class SlidComponent implements OnInit {
  products: Object [];
  index:number = 0;
  max:number;
  click:number = 0;
  temp:number = 0;

  constructor() { }

  ngOnInit() {
    this.products= [
    {name: "Nikon", description: "Описание к фотоапарату Никон", url: "http://desktopwallpapers.org.ua/large/201702/56308.jpg"},
    {name: "Текстура", description: "Описание к Текстуре", url: "http://desktopwallpapers.org.ua/large/201702/56309.jpg"},
    {name: "Архитектура", description: "Очень необычный дом", url: "http://desktopwallpapers.org.ua/large/201702/56311.jpg"},
    {name: "Природа", description: "Картина весны", url: "http://desktopwallpapers.org.ua/large/201702/56313.jpg"},
    {name: "Космос", description: "Обнаружена черная дыра", url: "http://desktopwallpapers.org.ua/large/201702/56314.jpg"}
  ]
    this.max= this.products.length-1;
  }

  
   myclick() {
     console.log(this.click);
    if (this.click < 12){
      this.click++;
      if (this.click%2 && this.click!=0 ){
        this.temp++;
      }
    }
    else{
      alert("Доплачивай "+this.temp);  
    }
  }
  
   next(){
     this.myclick();
    return this.index = ++this.index;
  }
  
  prev(){
    this.myclick();
    return this.index = --this.index;
  }
  dell(){
    this.temp=0;
    this.click=0;
  }
}

