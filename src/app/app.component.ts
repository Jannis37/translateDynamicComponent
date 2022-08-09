import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';
import { AppPanelDirective } from './app-panel.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(AppPanelDirective) view!: AppPanelDirective;

  constructor(
    private translate: TranslateService,
    private langService: LanguageService
  ){
    translate.setDefaultLang('en');
    translate.use('en');
  }

  onChangeLang() {
    if (this.translate.currentLang === 'de') {
      this.translate.use('en');
      this.langService.currentLang.next('en');
    } else {
      this.translate.use('de');
      this.langService.currentLang.next('de');
    }
  }

  onCreateDynamicComp() {
    const viewContainerRef = this.view.viewContainerRef;
    import('./lazy/lazy.module').then(({LazyModule}) => {
      const comp = LazyModule.getComponent();
      viewContainerRef.clear();
      viewContainerRef.createComponent<any>(comp);
    })
  }
}
