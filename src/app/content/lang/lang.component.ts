import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {
  langs: string[] = this.langService.getAvailableTranslations();
  activeLang: string;

  constructor(
    private langService: LangService
  ) { }

  ngOnInit() {
    this.langService.currentLocale$.subscribe( lang => {
      this.activeLang = lang;
    });
  }

  select(lang: string) {
    this.langService.setTranslation(lang);
  }

}
