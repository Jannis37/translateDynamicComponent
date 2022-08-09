import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;

  constructor(
    private translate: TranslateService,
    private langService: LanguageService
  ) { 
  }
  
  ngOnInit(): void {

    this.translate.use('de');
    console.log(this.translate.translations);
    console.log(this.translate.currentLang);

    this.subscription = this.langService.currentLang.subscribe((lang: string) => {
      console.log('Received: ' + lang);
      this.translate.use(lang);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
