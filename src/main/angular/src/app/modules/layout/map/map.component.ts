import {Component, AfterViewInit, ViewChild, ElementRef, OnInit} from '@angular/core';
import {LocalisationService} from './service/localisation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  constructor(private localisationService: LocalisationService) { }
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  map: google.maps.Map;
  lat = 51.9189;
  lng = 19.1344;
  markers: google.maps.Marker[] = [];
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
  };

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.mapInitializer();
    this.localisationService.getMarkers().subscribe(value => {
      this.deleteMarkers();
      if (value.length === 1 ) {
            this.map.setCenter(new google.maps.LatLng(value[0].lat, value[0].lng));
            this.map.setZoom(17);
      } else {
        this.map.setCenter(this.coordinates);
        this.map.setZoom(6);
      }
      this.saveMarkers(value);
      this.setMapOnAll(this.map);
    });
   }

   saveMarkers(markers: any) {
    markers.forEach(markerInfo => {
       const marker = new google.maps.Marker({
         position: new google.maps.LatLng(markerInfo.lat, markerInfo.lng),
         map: this.map,
         title: markerInfo.title
       });
       this.markers.push(marker);
     });
   }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
  }

  setMapOnAll(map: google.maps.Map | null) {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
      if (this.markers[i] != null) {
        const infoWindow = new google.maps.InfoWindow({
          content: this.markers[i].getTitle()
        });

        this.markers[i].addListener('click', () => {
          infoWindow.open(this.markers[i].getMap(), this.markers[i]);
        });
      }
    }
  }

  clearMarkers() {
    this.setMapOnAll(null);
  }

  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }
}
