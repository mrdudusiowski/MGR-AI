import {Component, OnDestroy, OnInit} from '@angular/core';
import {PagesComponent} from '../pages.component';
import {ToastrService} from 'ngx-toastr';
import {DeviceService} from '../../../_services/_api/device.api.service';
import {ActivatedRoute} from '@angular/router';
import {LocalisationService} from '../../layout/map/service/localisation.service';
import {HttpParams} from '@angular/common/http';
import {TokenStorageService} from '../../../_services/token-storage.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit, OnDestroy {

  private devices: any;
  loadedData = false;
  interval: any;
  page = 1;
  count = 0;
  pageSize = 0;

  constructor(private pagesComponent: PagesComponent,
              private toastr: ToastrService,
              private deviceService: DeviceService,
              private activatedRoute: ActivatedRoute,
              private localisationService: LocalisationService,
              private tokenStorage: TokenStorageService
              ) {}

  ngOnInit() {
    this.pageSize = this.tokenStorage.getUser().userSettings.items_on_page;
    this.retriveDevices();
    this.interval = setInterval(() => {
      this.refreshDevices();
    }, 50000);
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

  retriveDevices() {
    this.activatedRoute.data.subscribe( value => {
      if (value.devices != null) {
        this.devices = value.devices.content;
        this.count = value.devices.totalElements;
        this.loadedData = true;
      }
    });
  }

  handlePageChange(event) {
    this.page = event;
    this.refreshDevices();
  }

  ngOnDestroy() {
      if (this.interval) {
        clearInterval(this.interval);
      }
  }

  refreshDevices() {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.deviceService.getAllDevices(params).subscribe(
      response => {
        this.devices = response.content;
        this.count = response.totalElements;
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
