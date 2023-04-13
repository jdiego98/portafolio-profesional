import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private language = 'es';
  private languageSubject = new BehaviorSubject<string>(this.language);
  public languageChange = this.languageSubject.asObservable();

  constructor() { }

  public setLanguage(language: string): void {
    this.language = language;
    this.languageSubject.next(this.language);
  }

  public getLanguage(): string {
    return this.language;
  }

}
