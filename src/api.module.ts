/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';


import { LaunchComponent } from "./composant/launch/LaunchComponent";
import { LaunchListComponent } from './composant/launch-list/launch-list.component';
import { AgenciesService } from './infrastructure/services/agencies.service';
import { AstronautService } from './infrastructure/services/astronaut.service';
import { ConfigService } from './infrastructure/services/config.service';
import { DashboardService } from './infrastructure/services/dashboard.service';
import { DockingEventService } from './infrastructure/services/docking-event.service';
import { EventService } from './infrastructure/services/event.service';
import { ExpeditionService } from './infrastructure/services/expedition.service';
import { LaunchService } from './infrastructure/services/launch.service';
import { LauncherService } from './infrastructure/services/launcher.service';
import { PadService } from './infrastructure/services/pad.service';
import { ProgramService } from './infrastructure/services/program.service';
import { SpacecraftService } from './infrastructure/services/spacecraft.service';
import { SpacestationService } from './infrastructure/services/spacestation.service';
import { UpdatesService } from './infrastructure/services/updates.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AgenciesService,
    AstronautService,
    ConfigService,
    DashboardService,
    DockingEventService,
    EventService,
    ExpeditionService,
    LaunchService,
    LauncherService,
    PadService,
    ProgramService,
    SpacecraftService,
    SpacestationService,
    UpdatesService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
