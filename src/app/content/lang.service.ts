import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LangService {
  private translations: Object = {};
  private availableTranslations: string[] = ['en', 'ru'];
  private storageKey = 'defaultLang';

  currentTranslation$: BehaviorSubject<Object> = new BehaviorSubject({});
  currentLocale$: BehaviorSubject<string> = new BehaviorSubject(this.availableTranslations[0]);

  constructor(
    private http: HttpClient
  ) {
    const defaultLang = localStorage.getItem(this.storageKey);
    this.setTranslation(defaultLang || this.availableTranslations[0]);
  }

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
    localStorage.setItem(this.storageKey, locale);
    this.currentTranslation$.next(this.translations[locale]);
    this.currentLocale$.next(locale);
  }

  private loadTranslation(locale: string) {
    return this.http
      .get(`assets/locale/${locale}.json`);
  }
}
