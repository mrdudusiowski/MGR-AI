import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {SettingsComponent} from './settings/settings.component';
import {RouterModule} from '@angular/router';
import {MainSpinnerComponent} from './spinners/main-spinner/main-spinner.component';
import { PageNotFoundComponent } from './404/page-not-found.component';
import { MapComponent } from './map/map.component';
import { ComponentSpinnerComponent } from './spinners/component-spinner/component-spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SettingsComponent,
    MainSpinnerComponent,
    PageNotFoundComponent,
    MapComponent,
    ComponentSpinnerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SettingsComponent,
    MainSpinnerComponent,
    MapComponent,
    ComponentSpinnerComponent
  ]
})
export class LayoutModule {
}
