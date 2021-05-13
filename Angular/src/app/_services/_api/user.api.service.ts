import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(API_URL + 'getAll');
  }

  getUser(id): Observable<any> {
    return this.http.get(API_URL + 'getUser/', {params: {id} });
  }

  addUser(data): Observable<any> {
    return this.http.post(API_URL + 'register', {
      username: data.username,
      email: data.email,
      password: data.password,
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      isAdmin: data.isAdmin,
      isMod: data.isMod
    }, httpOptions);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(API_URL + 'delete/', {params: {id} });
  }

  updateUser(data): Observable<any> {
    return this.http.put(API_URL + 'update/', {
      username: data.username,
      email: data.email,
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      isAdmin: data.isAdmin2,
      isMod: data.isMod2
    }, httpOptions);
  }

  changePassword(data): Observable<any> {
    return this.http.put(API_URL + 'changePassword/', {
      username: data.username,
      password: data.password,
    }, httpOptions);
  }

  getReport(): Observable<any> {
    return this.http.get(API_URL + 'getReport', { responseType: 'blob' });
  }
}
