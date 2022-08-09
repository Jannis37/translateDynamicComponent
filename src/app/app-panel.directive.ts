import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPanel]'
})
export class AppPanelDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
