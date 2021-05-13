import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../../../../_services/_api/user.api.service';
import {DeviceService} from '../../../../_services/_api/device.api.service';

@Injectable({
  providedIn: 'root'
})
export class GetDevicesService implements Resolve<any> {

  constructor(private deviceService: DeviceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.deviceService.getAllDevices();
  }
}
