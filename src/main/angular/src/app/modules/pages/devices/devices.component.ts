import {Component, OnDestroy, OnInit} from '@angular/core';
import {PagesComponent} from '../pages.component';
import {ToastrService} from 'ngx-toastr';
import {DeviceService} from '../../../_services/_api/device.api.service';
import {ActivatedRoute} from '@angular/router';
import {LocalisationService} from '../../layout/map/service/localisation.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, OnDestroy {

  private devices: any;
  loadedData = false;
  interval: any;

  constructor(private pagesComponent: PagesComponent,
              private toastr: ToastrService,
              private deviceService: DeviceService,
              private activatedRoute: ActivatedRoute,
              private localisationService: LocalisationService
              ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe( value => {
      if (value.devices != null) {
        this.devices = value.devices;
        this.loadedData = true;
      }
    });
    this.interval = setInterval(() => {
      this.refreshDevices();
    }, 50000);
  }

  ngOnDestroy() {
      if (this.interval) {
        clearInterval(this.interval);
      }
  }

  refreshDevices() {
    this.deviceService.getAllDevices().subscribe(
      response => {
        this.devices = response;
      },
      err => {
        this.toastr.error(err.error.message, 'Error!');
      });
  }

  openMapModal(device: any, ) {
    const title: string =  'Owner: ' + device.user.name + ' ' + device.user.surname + '<br>'
                          + 'Phone: ' + device.manufacturer + ' ' + device.phoneModel;
    this.localisationService.clearMarkersList();
    this.localisationService.addMarker({lat: device.localisation.latitude, lng: device.localisation.longitude, title});
    $('#mapModal').modal('show');
  }
}
