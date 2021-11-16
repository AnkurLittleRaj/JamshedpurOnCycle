import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { MainPageBodyComponent } from '../components/main-page-body/main-page-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule,} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav';
import { AreaDetailComponent } from '../components/area-detail/area-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageBodyComponent,
    AreaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
