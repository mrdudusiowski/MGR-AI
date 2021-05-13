import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {TokenStorageService} from './token-storage.service';

@Injectable({
    providedIn: 'root'
  })
  export class RoutingGuardService implements CanActivate {

    constructor(private router: Router, private tokenStorage: TokenStorageService) {}

    canActivate(): boolean {
      if (this.tokenStorage.getToken() != null) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }
  }
