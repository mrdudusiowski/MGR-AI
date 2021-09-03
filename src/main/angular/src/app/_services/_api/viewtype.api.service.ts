import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/viewTypes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ViewTypeService {

  constructor(private http: HttpClient) { }

  getAllViewTypes(): Observable<any> {
    return this.http.get(API_URL);
  }
}
