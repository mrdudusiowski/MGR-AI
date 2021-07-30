import { Component } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CPMA';

  active: boolean;

  constructor(private router: Router, private translate: TranslateService) {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationStart) {
        this.active = true ;
      } else if (value instanceof NavigationCancel) {
        this.active  = false;
      } else if (value instanceof NavigationError) {
        this.active  = false;
      } else if (value instanceof NavigationEnd) {
        this.active  = false;
      }
    });

    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pl/) ? browserLang : 'en');
  }
}
