/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from 'src/base-service';
import { ApiConfiguration } from 'src/api-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { StrictHttpResponse } from 'src/strict-http-response';
import { RequestBuilder } from 'src/request-builder';
import { map, filter } from 'rxjs/operators';

import { AgencyType } from '../dto/agency-type';
import { AstronautRole } from '../dto/astronaut-role';
import { AstronautStatus } from '../dto/astronaut-status';
import { AstronautType } from '../dto/astronaut-type';
import { DockingLocation } from '../dto/docking-location';
import { EventType } from '../dto/event-type';
import { FirstStageType } from '../dto/first-stage-type';
import { LandingLocation } from '../dto/landing-location';
import { LaunchStatus } from '../dto/launch-status';
import { LauncherConfigDetail } from '../dto/launcher-config-detail';
import { MissionType } from '../dto/mission-type';
import { NoticeType } from '../dto/notice-type';
import { Orbit } from '../dto/orbit';
import { PaginatedAgencyTypeList } from '../dto/paginated-agency-type-list';
import { PaginatedAstronautRoleList } from '../dto/paginated-astronaut-role-list';
import { PaginatedAstronautStatusList } from '../dto/paginated-astronaut-status-list';
import { PaginatedAstronautTypeList } from '../dto/paginated-astronaut-type-list';
import { PaginatedDockingLocationList } from '../dto/paginated-docking-location-list';
import { PaginatedEventTypeList } from '../dto/paginated-event-type-list';
import { PaginatedFirstStageTypeList } from '../dto/paginated-first-stage-type-list';
import { PaginatedLandingLocationList } from '../dto/paginated-landing-location-list';
import { PaginatedLaunchStatusList } from '../dto/paginated-launch-status-list';
import { PaginatedLauncherConfigList } from '../dto/paginated-launcher-config-list';
import { PaginatedMissionTypeList } from '../dto/paginated-mission-type-list';
import { PaginatedNoticeTypeList } from '../dto/paginated-notice-type-list';
import { PaginatedOrbitList } from '../dto/paginated-orbit-list';
import { PaginatedRoadClosureStatusList } from '../dto/paginated-road-closure-status-list';
import { PaginatedSpaceStationStatusList } from '../dto/paginated-space-station-status-list';
import { PaginatedSpacecraftConfigurationList } from '../dto/paginated-spacecraft-configuration-list';
import { PaginatedSpacecraftStatusList } from '../dto/paginated-spacecraft-status-list';
import { RoadClosureStatus } from '../dto/road-closure-status';
import { SpaceStationStatus } from '../dto/space-station-status';
import { SpacecraftConfigurationDetail } from '../dto/spacecraft-configuration-detail';
import { SpacecraftStatus } from '../dto/spacecraft-status';

@Injectable({
  providedIn: 'root',
})
export class ConfigService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation configAgencytypeList
   */
  static readonly ConfigAgencytypeListPath = '/2.2.0/config/agencytype/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configAgencytypeList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAgencytypeList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedAgencyTypeList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigAgencytypeListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedAgencyTypeList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configAgencytypeList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAgencytypeList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedAgencyTypeList> {

    return this.configAgencytypeList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedAgencyTypeList>) => r.body as PaginatedAgencyTypeList)
    );
  }

  /**
   * Path part for operation configAgencytypeRetrieve
   */
  static readonly ConfigAgencytypeRetrievePath = '/2.2.0/config/agencytype/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configAgencytypeRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAgencytypeRetrieve$Response(params: {

    /**
     * A unique value identifying this agency type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AgencyType>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigAgencytypeRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AgencyType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configAgencytypeRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAgencytypeRetrieve(params: {

    /**
     * A unique value identifying this agency type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<AgencyType> {

    return this.configAgencytypeRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<AgencyType>) => r.body as AgencyType)
    );
  }

  /**
   * Path part for operation configAstronautroleList
   */
  static readonly ConfigAstronautroleListPath = '/2.2.0/config/astronautrole/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configAstronautroleList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAstronautroleList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedAstronautRoleList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigAstronautroleListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedAstronautRoleList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configAstronautroleList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAstronautroleList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedAstronautRoleList> {

    return this.configAstronautroleList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedAstronautRoleList>) => r.body as PaginatedAstronautRoleList)
    );
  }

  /**
   * Path part for operation configAstronautroleRetrieve
   */
  static readonly ConfigAstronautroleRetrievePath = '/2.2.0/config/astronautrole/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configAstronautroleRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAstronautroleRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Astronaut Role.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AstronautRole>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigAstronautroleRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AstronautRole>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configAstronautroleRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAstronautroleRetrieve(params: {

    /**
     * A unique integer value identifying this Astronaut Role.
     */
    id: number;
    context?: HttpContext
  }
): Observable<AstronautRole> {

    return this.configAstronautroleRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<AstronautRole>) => r.body as AstronautRole)
    );
  }

  /**
   * Path part for operation configAstronautstatusList
   */
  static readonly ConfigAstronautstatusListPath = '/2.2.0/config/astronautstatus/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configAstronautstatusList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAstronautstatusList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedAstronautStatusList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigAstronautstatusListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedAstronautStatusList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configAstronautstatusList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAstronautstatusList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedAstronautStatusList> {

    return this.configAstronautstatusList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedAstronautStatusList>) => r.body as PaginatedAstronautStatusList)
    );
  }

  /**
   * Path part for operation configAstronautstatusRetrieve
   */
  static readonly ConfigAstronautstatusRetrievePath = '/2.2.0/config/astronautstatus/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configAstronautstatusRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAstronautstatusRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Astronaut Status.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AstronautStatus>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigAstronautstatusRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AstronautStatus>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configAstronautstatusRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAstronautstatusRetrieve(params: {

    /**
     * A unique integer value identifying this Astronaut Status.
     */
    id: number;
    context?: HttpContext
  }
): Observable<AstronautStatus> {

    return this.configAstronautstatusRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<AstronautStatus>) => r.body as AstronautStatus)
    );
  }

  /**
   * Path part for operation configAstronauttypeList
   */
  static readonly ConfigAstronauttypeListPath = '/2.2.0/config/astronauttype/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configAstronauttypeList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAstronauttypeList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedAstronautTypeList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigAstronauttypeListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedAstronautTypeList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configAstronauttypeList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAstronauttypeList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedAstronautTypeList> {

    return this.configAstronauttypeList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedAstronautTypeList>) => r.body as PaginatedAstronautTypeList)
    );
  }

  /**
   * Path part for operation configAstronauttypeRetrieve
   */
  static readonly ConfigAstronauttypeRetrievePath = '/2.2.0/config/astronauttype/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configAstronauttypeRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAstronauttypeRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Astronaut Type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AstronautType>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigAstronauttypeRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AstronautType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configAstronauttypeRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configAstronauttypeRetrieve(params: {

    /**
     * A unique integer value identifying this Astronaut Type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<AstronautType> {

    return this.configAstronauttypeRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<AstronautType>) => r.body as AstronautType)
    );
  }

  /**
   * Path part for operation configDockinglocationList
   */
  static readonly ConfigDockinglocationListPath = '/2.2.0/config/dockinglocation/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configDockinglocationList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configDockinglocationList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedDockingLocationList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigDockinglocationListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedDockingLocationList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configDockinglocationList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configDockinglocationList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedDockingLocationList> {

    return this.configDockinglocationList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedDockingLocationList>) => r.body as PaginatedDockingLocationList)
    );
  }

  /**
   * Path part for operation configDockinglocationRetrieve
   */
  static readonly ConfigDockinglocationRetrievePath = '/2.2.0/config/dockinglocation/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configDockinglocationRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configDockinglocationRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Docking Location.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DockingLocation>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigDockinglocationRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DockingLocation>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configDockinglocationRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configDockinglocationRetrieve(params: {

    /**
     * A unique integer value identifying this Docking Location.
     */
    id: number;
    context?: HttpContext
  }
): Observable<DockingLocation> {

    return this.configDockinglocationRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<DockingLocation>) => r.body as DockingLocation)
    );
  }

  /**
   * Path part for operation configEventtypeList
   */
  static readonly ConfigEventtypeListPath = '/2.2.0/config/eventtype/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configEventtypeList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configEventtypeList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedEventTypeList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigEventtypeListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedEventTypeList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configEventtypeList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configEventtypeList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedEventTypeList> {

    return this.configEventtypeList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedEventTypeList>) => r.body as PaginatedEventTypeList)
    );
  }

  /**
   * Path part for operation configEventtypeRetrieve
   */
  static readonly ConfigEventtypeRetrievePath = '/2.2.0/config/eventtype/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configEventtypeRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configEventtypeRetrieve$Response(params: {

    /**
     * A unique value identifying this event type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<EventType>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigEventtypeRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EventType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configEventtypeRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configEventtypeRetrieve(params: {

    /**
     * A unique value identifying this event type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<EventType> {

    return this.configEventtypeRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<EventType>) => r.body as EventType)
    );
  }

  /**
   * Path part for operation configFirststagetypeList
   */
  static readonly ConfigFirststagetypeListPath = '/2.2.0/config/firststagetype/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configFirststagetypeList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configFirststagetypeList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedFirstStageTypeList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigFirststagetypeListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedFirstStageTypeList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configFirststagetypeList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configFirststagetypeList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedFirstStageTypeList> {

    return this.configFirststagetypeList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedFirstStageTypeList>) => r.body as PaginatedFirstStageTypeList)
    );
  }

  /**
   * Path part for operation configFirststagetypeRetrieve
   */
  static readonly ConfigFirststagetypeRetrievePath = '/2.2.0/config/firststagetype/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configFirststagetypeRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configFirststagetypeRetrieve$Response(params: {

    /**
     * A unique value identifying this first stage type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<FirstStageType>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigFirststagetypeRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FirstStageType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configFirststagetypeRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configFirststagetypeRetrieve(params: {

    /**
     * A unique value identifying this first stage type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<FirstStageType> {

    return this.configFirststagetypeRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<FirstStageType>) => r.body as FirstStageType)
    );
  }

  /**
   * Path part for operation configLandinglocationList
   */
  static readonly ConfigLandinglocationListPath = '/2.2.0/config/landinglocation/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configLandinglocationList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configLandinglocationList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedLandingLocationList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigLandinglocationListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedLandingLocationList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configLandinglocationList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configLandinglocationList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedLandingLocationList> {

    return this.configLandinglocationList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedLandingLocationList>) => r.body as PaginatedLandingLocationList)
    );
  }

  /**
   * Path part for operation configLandinglocationRetrieve
   */
  static readonly ConfigLandinglocationRetrievePath = '/2.2.0/config/landinglocation/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configLandinglocationRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configLandinglocationRetrieve$Response(params: {

    /**
     * A unique integer value identifying this landing location.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LandingLocation>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigLandinglocationRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LandingLocation>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configLandinglocationRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configLandinglocationRetrieve(params: {

    /**
     * A unique integer value identifying this landing location.
     */
    id: number;
    context?: HttpContext
  }
): Observable<LandingLocation> {

    return this.configLandinglocationRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<LandingLocation>) => r.body as LandingLocation)
    );
  }

  /**
   * Path part for operation configLauncherList
   */
  static readonly ConfigLauncherListPath = '/2.2.0/config/launcher/';

  /**
   * API endpoint that allows Launcher Configurations to be viewed.
   *
   * GET:
   * Return a list of all the existing launcher configurations.
   *
   * MODE:
   * Normal and Detailed
   * /2.2.0/config/launcher/?mode=detailed
   *
   * FILTERS:
   * Fields - 'family', 'agency', 'name', 'manufacturer__name', 'full_name'
   *
   * Get all Launchers with the Agency with name NASA.
   * Example - /2.2.0/config/launcher/?manufacturer__name=NASA
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configLauncherList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configLauncherList$Response(params?: {
    consecutive_successful_launches?: number;
    consecutive_successful_launches__gt?: number;
    consecutive_successful_launches__gte?: number;
    consecutive_successful_launches__lt?: number;
    consecutive_successful_launches__lte?: number;
    failed_launches?: number;
    failed_launches__gt?: number;
    failed_launches__gte?: number;
    failed_launches__lt?: number;
    failed_launches__lte?: number;
    family?: string;
    family__contains?: string;
    full_name?: string;
    full_name__contains?: string;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    manufacturer__name?: string;
    manufacturer__name__contains?: string;
    name?: string;
    name__contains?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    pending_launches?: number;
    pending_launches__gt?: number;
    pending_launches__gte?: number;
    pending_launches__lt?: number;
    pending_launches__lte?: number;
    program?: Array<number>;
    program__contains?: Array<number>;

    /**
     * A search term.
     */
    search?: string;
    successful_launches?: number;
    successful_launches__gt?: number;
    successful_launches__gte?: number;
    successful_launches__lt?: number;
    successful_launches__lte?: number;
    total_launch_count?: number;
    total_launch_count__gt?: number;
    total_launch_count__gte?: number;
    total_launch_count__lt?: number;
    total_launch_count__lte?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedLauncherConfigList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigLauncherListPath, 'get');
    if (params) {
      rb.query('consecutive_successful_launches', params.consecutive_successful_launches, {});
      rb.query('consecutive_successful_launches__gt', params.consecutive_successful_launches__gt, {});
      rb.query('consecutive_successful_launches__gte', params.consecutive_successful_launches__gte, {});
      rb.query('consecutive_successful_launches__lt', params.consecutive_successful_launches__lt, {});
      rb.query('consecutive_successful_launches__lte', params.consecutive_successful_launches__lte, {});
      rb.query('failed_launches', params.failed_launches, {});
      rb.query('failed_launches__gt', params.failed_launches__gt, {});
      rb.query('failed_launches__gte', params.failed_launches__gte, {});
      rb.query('failed_launches__lt', params.failed_launches__lt, {});
      rb.query('failed_launches__lte', params.failed_launches__lte, {});
      rb.query('family', params.family, {});
      rb.query('family__contains', params.family__contains, {});
      rb.query('full_name', params.full_name, {});
      rb.query('full_name__contains', params.full_name__contains, {});
      rb.query('limit', params.limit, {});
      rb.query('manufacturer__name', params.manufacturer__name, {});
      rb.query('manufacturer__name__contains', params.manufacturer__name__contains, {});
      rb.query('name', params.name, {});
      rb.query('name__contains', params.name__contains, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('pending_launches', params.pending_launches, {});
      rb.query('pending_launches__gt', params.pending_launches__gt, {});
      rb.query('pending_launches__gte', params.pending_launches__gte, {});
      rb.query('pending_launches__lt', params.pending_launches__lt, {});
      rb.query('pending_launches__lte', params.pending_launches__lte, {});
      rb.query('program', params.program, {"style":"form","explode":true});
      rb.query('program__contains', params.program__contains, {"style":"form","explode":true});
      rb.query('search', params.search, {});
      rb.query('successful_launches', params.successful_launches, {});
      rb.query('successful_launches__gt', params.successful_launches__gt, {});
      rb.query('successful_launches__gte', params.successful_launches__gte, {});
      rb.query('successful_launches__lt', params.successful_launches__lt, {});
      rb.query('successful_launches__lte', params.successful_launches__lte, {});
      rb.query('total_launch_count', params.total_launch_count, {});
      rb.query('total_launch_count__gt', params.total_launch_count__gt, {});
      rb.query('total_launch_count__gte', params.total_launch_count__gte, {});
      rb.query('total_launch_count__lt', params.total_launch_count__lt, {});
      rb.query('total_launch_count__lte', params.total_launch_count__lte, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedLauncherConfigList>;
      })
    );
  }

  /**
   * API endpoint that allows Launcher Configurations to be viewed.
   *
   * GET:
   * Return a list of all the existing launcher configurations.
   *
   * MODE:
   * Normal and Detailed
   * /2.2.0/config/launcher/?mode=detailed
   *
   * FILTERS:
   * Fields - 'family', 'agency', 'name', 'manufacturer__name', 'full_name'
   *
   * Get all Launchers with the Agency with name NASA.
   * Example - /2.2.0/config/launcher/?manufacturer__name=NASA
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configLauncherList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configLauncherList(params?: {
    consecutive_successful_launches?: number;
    consecutive_successful_launches__gt?: number;
    consecutive_successful_launches__gte?: number;
    consecutive_successful_launches__lt?: number;
    consecutive_successful_launches__lte?: number;
    failed_launches?: number;
    failed_launches__gt?: number;
    failed_launches__gte?: number;
    failed_launches__lt?: number;
    failed_launches__lte?: number;
    family?: string;
    family__contains?: string;
    full_name?: string;
    full_name__contains?: string;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    manufacturer__name?: string;
    manufacturer__name__contains?: string;
    name?: string;
    name__contains?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    pending_launches?: number;
    pending_launches__gt?: number;
    pending_launches__gte?: number;
    pending_launches__lt?: number;
    pending_launches__lte?: number;
    program?: Array<number>;
    program__contains?: Array<number>;

    /**
     * A search term.
     */
    search?: string;
    successful_launches?: number;
    successful_launches__gt?: number;
    successful_launches__gte?: number;
    successful_launches__lt?: number;
    successful_launches__lte?: number;
    total_launch_count?: number;
    total_launch_count__gt?: number;
    total_launch_count__gte?: number;
    total_launch_count__lt?: number;
    total_launch_count__lte?: number;
    context?: HttpContext
  }
): Observable<PaginatedLauncherConfigList> {

    return this.configLauncherList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedLauncherConfigList>) => r.body as PaginatedLauncherConfigList)
    );
  }

  /**
   * Path part for operation configLauncherRetrieve
   */
  static readonly ConfigLauncherRetrievePath = '/2.2.0/config/launcher/{id}/';

  /**
   * API endpoint that allows Launcher Configurations to be viewed.
   *
   * GET:
   * Return a list of all the existing launcher configurations.
   *
   * MODE:
   * Normal and Detailed
   * /2.2.0/config/launcher/?mode=detailed
   *
   * FILTERS:
   * Fields - 'family', 'agency', 'name', 'manufacturer__name', 'full_name'
   *
   * Get all Launchers with the Agency with name NASA.
   * Example - /2.2.0/config/launcher/?manufacturer__name=NASA
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configLauncherRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configLauncherRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Launcher Configuration.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LauncherConfigDetail>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigLauncherRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LauncherConfigDetail>;
      })
    );
  }

  /**
   * API endpoint that allows Launcher Configurations to be viewed.
   *
   * GET:
   * Return a list of all the existing launcher configurations.
   *
   * MODE:
   * Normal and Detailed
   * /2.2.0/config/launcher/?mode=detailed
   *
   * FILTERS:
   * Fields - 'family', 'agency', 'name', 'manufacturer__name', 'full_name'
   *
   * Get all Launchers with the Agency with name NASA.
   * Example - /2.2.0/config/launcher/?manufacturer__name=NASA
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configLauncherRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configLauncherRetrieve(params: {

    /**
     * A unique integer value identifying this Launcher Configuration.
     */
    id: number;
    context?: HttpContext
  }
): Observable<LauncherConfigDetail> {

    return this.configLauncherRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<LauncherConfigDetail>) => r.body as LauncherConfigDetail)
    );
  }

  /**
   * Path part for operation configLaunchstatusList
   */
  static readonly ConfigLaunchstatusListPath = '/2.2.0/config/launchstatus/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configLaunchstatusList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configLaunchstatusList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedLaunchStatusList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigLaunchstatusListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedLaunchStatusList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configLaunchstatusList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configLaunchstatusList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedLaunchStatusList> {

    return this.configLaunchstatusList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedLaunchStatusList>) => r.body as PaginatedLaunchStatusList)
    );
  }

  /**
   * Path part for operation configLaunchstatusRetrieve
   */
  static readonly ConfigLaunchstatusRetrievePath = '/2.2.0/config/launchstatus/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configLaunchstatusRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configLaunchstatusRetrieve$Response(params: {

    /**
     * A unique value identifying this Launch Status.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LaunchStatus>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigLaunchstatusRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LaunchStatus>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configLaunchstatusRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configLaunchstatusRetrieve(params: {

    /**
     * A unique value identifying this Launch Status.
     */
    id: number;
    context?: HttpContext
  }
): Observable<LaunchStatus> {

    return this.configLaunchstatusRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<LaunchStatus>) => r.body as LaunchStatus)
    );
  }

  /**
   * Path part for operation configMissiontypeList
   */
  static readonly ConfigMissiontypeListPath = '/2.2.0/config/missiontype/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configMissiontypeList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configMissiontypeList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedMissionTypeList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigMissiontypeListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedMissionTypeList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configMissiontypeList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configMissiontypeList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedMissionTypeList> {

    return this.configMissiontypeList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedMissionTypeList>) => r.body as PaginatedMissionTypeList)
    );
  }

  /**
   * Path part for operation configMissiontypeRetrieve
   */
  static readonly ConfigMissiontypeRetrievePath = '/2.2.0/config/missiontype/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configMissiontypeRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configMissiontypeRetrieve$Response(params: {

    /**
     * A unique value identifying this mission type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MissionType>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigMissiontypeRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MissionType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configMissiontypeRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configMissiontypeRetrieve(params: {

    /**
     * A unique value identifying this mission type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<MissionType> {

    return this.configMissiontypeRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<MissionType>) => r.body as MissionType)
    );
  }

  /**
   * Path part for operation configNoticetypeList
   */
  static readonly ConfigNoticetypeListPath = '/2.2.0/config/noticetype/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configNoticetypeList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configNoticetypeList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedNoticeTypeList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigNoticetypeListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedNoticeTypeList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configNoticetypeList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configNoticetypeList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedNoticeTypeList> {

    return this.configNoticetypeList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedNoticeTypeList>) => r.body as PaginatedNoticeTypeList)
    );
  }

  /**
   * Path part for operation configNoticetypeRetrieve
   */
  static readonly ConfigNoticetypeRetrievePath = '/2.2.0/config/noticetype/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configNoticetypeRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configNoticetypeRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Notices Type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<NoticeType>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigNoticetypeRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NoticeType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configNoticetypeRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configNoticetypeRetrieve(params: {

    /**
     * A unique integer value identifying this Notices Type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<NoticeType> {

    return this.configNoticetypeRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<NoticeType>) => r.body as NoticeType)
    );
  }

  /**
   * Path part for operation configOrbitList
   */
  static readonly ConfigOrbitListPath = '/2.2.0/config/orbit/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configOrbitList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configOrbitList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedOrbitList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigOrbitListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedOrbitList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configOrbitList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configOrbitList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedOrbitList> {

    return this.configOrbitList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedOrbitList>) => r.body as PaginatedOrbitList)
    );
  }

  /**
   * Path part for operation configOrbitRetrieve
   */
  static readonly ConfigOrbitRetrievePath = '/2.2.0/config/orbit/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configOrbitRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configOrbitRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Orbit.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Orbit>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigOrbitRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Orbit>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configOrbitRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configOrbitRetrieve(params: {

    /**
     * A unique integer value identifying this Orbit.
     */
    id: number;
    context?: HttpContext
  }
): Observable<Orbit> {

    return this.configOrbitRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<Orbit>) => r.body as Orbit)
    );
  }

  /**
   * Path part for operation configRoadclosurestatusList
   */
  static readonly ConfigRoadclosurestatusListPath = '/2.2.0/config/roadclosurestatus/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configRoadclosurestatusList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configRoadclosurestatusList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedRoadClosureStatusList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigRoadclosurestatusListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedRoadClosureStatusList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configRoadclosurestatusList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configRoadclosurestatusList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedRoadClosureStatusList> {

    return this.configRoadclosurestatusList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedRoadClosureStatusList>) => r.body as PaginatedRoadClosureStatusList)
    );
  }

  /**
   * Path part for operation configRoadclosurestatusRetrieve
   */
  static readonly ConfigRoadclosurestatusRetrievePath = '/2.2.0/config/roadclosurestatus/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configRoadclosurestatusRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configRoadclosurestatusRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Road Closure Type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<RoadClosureStatus>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigRoadclosurestatusRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RoadClosureStatus>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configRoadclosurestatusRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configRoadclosurestatusRetrieve(params: {

    /**
     * A unique integer value identifying this Road Closure Type.
     */
    id: number;
    context?: HttpContext
  }
): Observable<RoadClosureStatus> {

    return this.configRoadclosurestatusRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<RoadClosureStatus>) => r.body as RoadClosureStatus)
    );
  }

  /**
   * Path part for operation configSpacecraftList
   */
  static readonly ConfigSpacecraftListPath = '/2.2.0/config/spacecraft/';

  /**
   * API endpoint that allows Spacecraft Configs to be viewed.
   *
   * GET:
   * Return a list of all the existing spacecraft.
   *
   * FILTERS:
   * Parameters - 'name', 'manufacturer', 'in_use', 'human_rated'
   * Example - /2.2.0/config/spacecraft/?status=Active
   *
   * SEARCH EXAMPLE:
   * Example - /2.2.0/config/spacecraft/?search=Dragon
   *
   * ORDERING:
   * Fields - 'name'
   * Example - /2.2.0/config/spacecraft/?order=name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configSpacecraftList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configSpacecraftList$Response(params?: {
    human_rated?: boolean;
    in_use?: boolean;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    manufacturer?: number;
    name?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedSpacecraftConfigurationList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigSpacecraftListPath, 'get');
    if (params) {
      rb.query('human_rated', params.human_rated, {});
      rb.query('in_use', params.in_use, {});
      rb.query('limit', params.limit, {});
      rb.query('manufacturer', params.manufacturer, {});
      rb.query('name', params.name, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedSpacecraftConfigurationList>;
      })
    );
  }

  /**
   * API endpoint that allows Spacecraft Configs to be viewed.
   *
   * GET:
   * Return a list of all the existing spacecraft.
   *
   * FILTERS:
   * Parameters - 'name', 'manufacturer', 'in_use', 'human_rated'
   * Example - /2.2.0/config/spacecraft/?status=Active
   *
   * SEARCH EXAMPLE:
   * Example - /2.2.0/config/spacecraft/?search=Dragon
   *
   * ORDERING:
   * Fields - 'name'
   * Example - /2.2.0/config/spacecraft/?order=name
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configSpacecraftList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configSpacecraftList(params?: {
    human_rated?: boolean;
    in_use?: boolean;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    manufacturer?: number;
    name?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedSpacecraftConfigurationList> {

    return this.configSpacecraftList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedSpacecraftConfigurationList>) => r.body as PaginatedSpacecraftConfigurationList)
    );
  }

  /**
   * Path part for operation configSpacecraftRetrieve
   */
  static readonly ConfigSpacecraftRetrievePath = '/2.2.0/config/spacecraft/{id}/';

  /**
   * API endpoint that allows Spacecraft Configs to be viewed.
   *
   * GET:
   * Return a list of all the existing spacecraft.
   *
   * FILTERS:
   * Parameters - 'name', 'manufacturer', 'in_use', 'human_rated'
   * Example - /2.2.0/config/spacecraft/?status=Active
   *
   * SEARCH EXAMPLE:
   * Example - /2.2.0/config/spacecraft/?search=Dragon
   *
   * ORDERING:
   * Fields - 'name'
   * Example - /2.2.0/config/spacecraft/?order=name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configSpacecraftRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configSpacecraftRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Spacecraft Configuration.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SpacecraftConfigurationDetail>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigSpacecraftRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SpacecraftConfigurationDetail>;
      })
    );
  }

  /**
   * API endpoint that allows Spacecraft Configs to be viewed.
   *
   * GET:
   * Return a list of all the existing spacecraft.
   *
   * FILTERS:
   * Parameters - 'name', 'manufacturer', 'in_use', 'human_rated'
   * Example - /2.2.0/config/spacecraft/?status=Active
   *
   * SEARCH EXAMPLE:
   * Example - /2.2.0/config/spacecraft/?search=Dragon
   *
   * ORDERING:
   * Fields - 'name'
   * Example - /2.2.0/config/spacecraft/?order=name
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configSpacecraftRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configSpacecraftRetrieve(params: {

    /**
     * A unique integer value identifying this Spacecraft Configuration.
     */
    id: number;
    context?: HttpContext
  }
): Observable<SpacecraftConfigurationDetail> {

    return this.configSpacecraftRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<SpacecraftConfigurationDetail>) => r.body as SpacecraftConfigurationDetail)
    );
  }

  /**
   * Path part for operation configSpacecraftstatusList
   */
  static readonly ConfigSpacecraftstatusListPath = '/2.2.0/config/spacecraftstatus/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configSpacecraftstatusList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configSpacecraftstatusList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedSpacecraftStatusList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigSpacecraftstatusListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedSpacecraftStatusList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configSpacecraftstatusList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configSpacecraftstatusList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedSpacecraftStatusList> {

    return this.configSpacecraftstatusList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedSpacecraftStatusList>) => r.body as PaginatedSpacecraftStatusList)
    );
  }

  /**
   * Path part for operation configSpacecraftstatusRetrieve
   */
  static readonly ConfigSpacecraftstatusRetrievePath = '/2.2.0/config/spacecraftstatus/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configSpacecraftstatusRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configSpacecraftstatusRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Spacecraft Status.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SpacecraftStatus>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigSpacecraftstatusRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SpacecraftStatus>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configSpacecraftstatusRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configSpacecraftstatusRetrieve(params: {

    /**
     * A unique integer value identifying this Spacecraft Status.
     */
    id: number;
    context?: HttpContext
  }
): Observable<SpacecraftStatus> {

    return this.configSpacecraftstatusRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<SpacecraftStatus>) => r.body as SpacecraftStatus)
    );
  }

  /**
   * Path part for operation configSpacestationstatusList
   */
  static readonly ConfigSpacestationstatusListPath = '/2.2.0/config/spacestationstatus/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configSpacestationstatusList()` instead.
   *
   * This method doesn't expect any request body.
   */
  configSpacestationstatusList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedSpaceStationStatusList>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigSpacestationstatusListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedSpaceStationStatusList>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configSpacestationstatusList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configSpacestationstatusList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedSpaceStationStatusList> {

    return this.configSpacestationstatusList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedSpaceStationStatusList>) => r.body as PaginatedSpaceStationStatusList)
    );
  }

  /**
   * Path part for operation configSpacestationstatusRetrieve
   */
  static readonly ConfigSpacestationstatusRetrievePath = '/2.2.0/config/spacestationstatus/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `configSpacestationstatusRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  configSpacestationstatusRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Space Station Status.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SpaceStationStatus>> {

    const rb = new RequestBuilder(this.rootUrl, ConfigService.ConfigSpacestationstatusRetrievePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SpaceStationStatus>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `configSpacestationstatusRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  configSpacestationstatusRetrieve(params: {

    /**
     * A unique integer value identifying this Space Station Status.
     */
    id: number;
    context?: HttpContext
  }
): Observable<SpaceStationStatus> {

    return this.configSpacestationstatusRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<SpaceStationStatus>) => r.body as SpaceStationStatus)
    );
  }

}
