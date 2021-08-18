import { Component } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {TokenStorageService} from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CPMA';
  active: boolean;

  constructor(private router: Router, private translate: TranslateService, private tokenStorage: TokenStorageService) {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationStart) {
        this.active = true;
      } else if (value instanceof NavigationCancel) {
        this.active = false;
      } else if (value instanceof NavigationError) {
        this.active = false;
      } else if (value instanceof NavigationEnd) {
        this.active = false;
      }
    });

    const user = tokenStorage.getUser();
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
    if (user != null) {
      translate.use(user.userSettings.language.toLowerCase());
    } else {
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|pl/) ? browserLang : 'en');
    }
  }
}
