import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from '../../../_services/_api/device.api.service';
import {LocalisationService} from '../../layout/map/service/localisation.service';
import {ToastrService} from 'ngx-toastr';
import {DashboardService} from '../../../_services/_api/dashboard.api.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private deviceService: DeviceService,
              private toastr: ToastrService,
              private localisationService: LocalisationService,
              private dashboardService: DashboardService,
              ) {
  }

  private userCount = 0;
  private deviceCount = 0;
  private batteryGood = 0;
  private batteryMedium = 0;
  private batteryLow = 0;
  interval: any;
  loadedData: boolean = false;

  async ngOnInit() {
    this.localisationService.clearMarkersList();
    this.getDevices();
    this.dashboardService.getDashboardInfo().subscribe(
      response => {
        this.userCount = response.userCount;
        this.deviceCount = response.deviceCount;
        this.batteryGood = response.batteryGood;
        this.batteryMedium = response.batteryMedium;
        this.batteryLow = response.batteryLow;
        this.loadedData = true;
      },
      err => {
        this.toastr.error(err.error.message, 'Error!');
      });
    this.interval = setInterval(() => {
      this.localisationService.clearMarkersList();
      this.getDevices();
      this.refreshDashboardInfo();
    }, 50000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  refreshDashboardInfo() {
    this.dashboardService.getDashboardInfo().subscribe(
      response => {
        this.userCount = response.userCount;
        this.deviceCount = response.deviceCount;
        this.batteryGood = response.batteryGood;
        this.batteryMedium = response.batteryMedium;
        this.batteryLow = response.batteryLow;
      },
      err => {
        this.toastr.error(err.error.message, 'Error!');
      });
  }

  getDevices() {
    this.deviceService.getAllDevicesList().subscribe(
      response => {
        response.forEach(device => {
          const title: string =  'Owner: ' + device.user.name + ' ' + device.user.surname + '<br>'
            + 'Phone: ' + device.manufacturer + ' ' + device.phoneModel;
          this.localisationService.addMarker({lat: device.localisation.latitude, lng: device.localisation.longitude, title});
        });
      },
      err => {
        this.toastr.error(err.error.message, 'Error!');
      });
  }
}
