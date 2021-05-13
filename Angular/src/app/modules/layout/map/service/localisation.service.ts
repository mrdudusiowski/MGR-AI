import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface Cordinates {
  lat: number;
  lng: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalisationService {
  private cordinates: Cordinates[] = [];
  private markers: BehaviorSubject<Cordinates[]> = new BehaviorSubject([]);

  constructor() {
  }

  getMarkers(): Observable<Cordinates[]> {
    return this.markers.asObservable();
  }

  addMarker(cordinate: Cordinates) {
    this.cordinates.push(cordinate);
    this.markers.next(this.cordinates);
  }

  clearMarkersList() {
    this.cordinates = [];
    this.markers.next(this.cordinates);
  }
}
