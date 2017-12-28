import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {
  langs: string[] = ['en', 'ru', 'es', 'de', 'fr'];
  activeLang: string = this.langs[0];

  constructor() { }

  ngOnInit() {
  }

  select(lang: string){
    this.activeLang = lang;
  }

}
