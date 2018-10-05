import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmrsComponent } from './smrs/smrs.component';
import { DmrsComponent } from './dmrs/dmrs.component';
import { RegyyComponent } from './regyy/regyy.component';
import { PlaybookComponent } from './playbook/playbook.component';

import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component';
import { HostDirective } from './directive/host-directive';
import { ComponentItemsService } from './service/component.items.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    DynamicLoaderComponent,
    HostDirective,
    SmrsComponent,
    DmrsComponent,
    RegyyComponent,
    PlaybookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  entryComponents: [SmrsComponent, DmrsComponent, RegyyComponent, PlaybookComponent],
  providers: [ComponentItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
