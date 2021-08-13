import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../../../../_services/_api/user.api.service';
import {HttpParams} from '@angular/common/http';
import {TokenStorageService} from '../../../../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService implements Resolve<any> {

  constructor(private userService: UserService, private tokenStorage: TokenStorageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.userService.getAllUsers(this.getRequestParams(1, this.tokenStorage.getUser().userSettings.items_on_page));
  }

  getRequestParams(page, pageSize) {
    let params = new HttpParams();
    if (page) {
      params = params.append('page', String(page - 1));
    }
    if (pageSize) {
      params = params.append('size', pageSize);
    }
    return params;
  }
}
