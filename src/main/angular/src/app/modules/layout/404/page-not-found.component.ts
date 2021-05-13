import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  goToPage() {
    if (this.tokenStorage.getUser() == null) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/cpma/dashboard']);
    }
  }
}
