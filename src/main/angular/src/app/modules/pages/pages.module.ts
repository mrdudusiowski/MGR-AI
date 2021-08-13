import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { UsersComponent } from './users/users.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { DevicesComponent } from './devices/devices.component';
import {TranslateModule} from '@ngx-translate/core';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [PagesComponent, DashboardComponent, UsersComponent, ProfileComponent, DevicesComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgxPaginationModule,
    ]
})
export class PagesModule {
}
