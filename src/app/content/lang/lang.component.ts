import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {
  langs: string[] = this.langService.getAvailableTranslations();
  activeLang: string = this.langs[0];

  constructor(
    private langService: LangService
  ) { }

  ngOnInit() {
    this.emit();
  }

  select(lang: string){
    this.activeLang = lang;
    this.emit();
  }

  emit() {
    this.langService.setTranslation(this.activeLang);
  }

}
