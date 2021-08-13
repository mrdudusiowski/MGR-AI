import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/device/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  getAllDevices(parameters): Observable<any> {
    return this.http.get(API_URL + 'getAll', {params: parameters});
  }

  getAllDevicesList(): Observable<any> {
    return this.http.get(API_URL + 'getDevicesList');
  }
}
