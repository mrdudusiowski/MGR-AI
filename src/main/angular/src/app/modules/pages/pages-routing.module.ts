import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {ProfileComponent} from './profile/profile.component';
import {DevicesComponent} from './devices/devices.component';
import {GetUsersService} from './users/service/get.users.service';
import {GetDevicesService} from './devices/service/get.devices.service';



const routes: Routes = [{
    path: '', component: PagesComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UsersComponent, resolve: { users: GetUsersService },
                      children: [{path: 'table', component: UsersComponent}]},
      {path: 'devices', component: DevicesComponent, resolve: { devices: GetDevicesService },
                      children: [{path: 'table', component: DevicesComponent}]},
      {path: 'profile', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
