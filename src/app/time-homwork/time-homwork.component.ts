import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-homwork',
  templateUrl: './time-homwork.component.html',
  styleUrls: ['./time-homwork.component.css']
})
export class TimeHomworkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mytime();
    
    
  }

  mytime() {
    var date = new Date(2012, 1, 31, 12, 30, 0);

    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

console.log( date.toLocaleString("ru", options) ); // среда, 31 декабря 2014 г. н.э. 12:30:00
console.log( date.toLocaleString("en-US", options) ); // Wednesday, December 31, 2014 Anno Domini 12:30:00 PM
  }






}
