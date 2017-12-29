import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LangService {
  currentTranslation: BehaviorSubject<Object> = new BehaviorSubject({});

  private translations: Object = {};
  private availableTranslations: string[] = ['en', 'ru'];

  constructor(
    private http: HttpClient
  ) { }
  
  setTranslation(locale: string) {
    if (this.translations[locale]) {
      this.emit(locale);
    } else {
      this.loadTranslation(locale)
        .subscribe( (translation: Object) => {
          this.translations[locale] = translation;
          this.emit(locale);
        });
    }
  }

  getAvailableTranslations(): string[] {
    return this.availableTranslations;
  }

  private emit(locale: string) {
    this.currentTranslation.next(this.translations[locale]);
  }

  private loadTranslation(locale: string) {
    return this.http
      .get(`assets/locale/${locale}.json`)
  }
}
