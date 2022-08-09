import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang = new BehaviorSubject<string>('en');

  constructor() { }
}
