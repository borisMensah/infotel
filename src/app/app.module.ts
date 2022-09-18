import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LaunchListComponent } from 'src/composant/launch-list/launch-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchComponent } from "src/composant/launch/LaunchComponent";


@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    LaunchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
