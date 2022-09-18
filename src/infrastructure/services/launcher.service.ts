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

import { LauncherDetail } from '../dto/launcher-detail';
import { PaginatedLauncherList } from '../dto/paginated-launcher-list';

@Injectable({
  providedIn: 'root',
})
export class LauncherService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation launcherList
   */
  static readonly LauncherListPath = '/2.2.0/launcher/';

  /**
   * API endpoint that allows Launcher instances to be viewed.
   *
   * GET:
   * Return a list of all the existing launcher instances.
   *
   * FILTERS:
   * Parameters - 'id', 'serial_number', 'flight_proven', 'launcher_config', 'launcher_config__manufacturer'
   * Example - /2.2.0/launcher/?serial_number=B1046
   *
   * SEARCH EXAMPLE:
   * /2.2.0/launcher/?search=expended
   * Searches through serial number or status
   *
   * ORDERING:
   * Fields - 'id', 'flight_proven',
   * Example - /2.2.0/launcher/?order=flight_proven
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `launcherList()` instead.
   *
   * This method doesn't expect any request body.
   */
  launcherList$Response(params?: {
    attempted_landings?: number;
    attempted_landings__gt?: number;
    attempted_landings__gte?: number;
    attempted_landings__lt?: number;
    attempted_landings__lte?: number;
    first_laucnh_date?: string;

    /**
     * Flight Proven
     */
    flight_proven?: boolean;
    flights?: number;
    flights__gt?: number;
    flights__gte?: number;
    flights__lt?: number;
    flights__lte?: number;
    id?: number;
    id__contains?: number;
    last_launch_date?: string;
    launcher_config__manufacturer__name?: string;
    launcher_config__manufacturer__name__contains?: string;

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
    serial_number?: string;
    serial_number__contains?: string;
    successful_landings?: number;
    successful_landings__gt?: number;
    successful_landings__gte?: number;
    successful_landings__lt?: number;
    successful_landings__lte?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedLauncherList>> {

    const rb = new RequestBuilder(this.rootUrl, LauncherService.LauncherListPath, 'get');
    if (params) {
      rb.query('attempted_landings', params.attempted_landings, {});
      rb.query('attempted_landings__gt', params.attempted_landings__gt, {});
      rb.query('attempted_landings__gte', params.attempted_landings__gte, {});
      rb.query('attempted_landings__lt', params.attempted_landings__lt, {});
      rb.query('attempted_landings__lte', params.attempted_landings__lte, {});
      rb.query('first_laucnh_date', params.first_laucnh_date, {});
      rb.query('flight_proven', params.flight_proven, {});
      rb.query('flights', params.flights, {});
      rb.query('flights__gt', params.flights__gt, {});
      rb.query('flights__gte', params.flights__gte, {});
      rb.query('flights__lt', params.flights__lt, {});
      rb.query('flights__lte', params.flights__lte, {});
      rb.query('id', params.id, {});
      rb.query('id__contains', params.id__contains, {});
      rb.query('last_launch_date', params.last_launch_date, {});
      rb.query('launcher_config__manufacturer__name', params.launcher_config__manufacturer__name, {});
      rb.query('launcher_config__manufacturer__name__contains', params.launcher_config__manufacturer__name__contains, {});
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
      rb.query('serial_number', params.serial_number, {});
      rb.query('serial_number__contains', params.serial_number__contains, {});
      rb.query('successful_landings', params.successful_landings, {});
      rb.query('successful_landings__gt', params.successful_landings__gt, {});
      rb.query('successful_landings__gte', params.successful_landings__gte, {});
      rb.query('successful_landings__lt', params.successful_landings__lt, {});
      rb.query('successful_landings__lte', params.successful_landings__lte, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedLauncherList>;
      })
    );
  }

  /**
   * API endpoint that allows Launcher instances to be viewed.
   *
   * GET:
   * Return a list of all the existing launcher instances.
   *
   * FILTERS:
   * Parameters - 'id', 'serial_number', 'flight_proven', 'launcher_config', 'launcher_config__manufacturer'
   * Example - /2.2.0/launcher/?serial_number=B1046
   *
   * SEARCH EXAMPLE:
   * /2.2.0/launcher/?search=expended
   * Searches through serial number or status
   *
   * ORDERING:
   * Fields - 'id', 'flight_proven',
   * Example - /2.2.0/launcher/?order=flight_proven
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `launcherList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  launcherList(params?: {
    attempted_landings?: number;
    attempted_landings__gt?: number;
    attempted_landings__gte?: number;
    attempted_landings__lt?: number;
    attempted_landings__lte?: number;
    first_laucnh_date?: string;

    /**
     * Flight Proven
     */
    flight_proven?: boolean;
    flights?: number;
    flights__gt?: number;
    flights__gte?: number;
    flights__lt?: number;
    flights__lte?: number;
    id?: number;
    id__contains?: number;
    last_launch_date?: string;
    launcher_config__manufacturer__name?: string;
    launcher_config__manufacturer__name__contains?: string;

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
    serial_number?: string;
    serial_number__contains?: string;
    successful_landings?: number;
    successful_landings__gt?: number;
    successful_landings__gte?: number;
    successful_landings__lt?: number;
    successful_landings__lte?: number;
    context?: HttpContext
  }
): Observable<PaginatedLauncherList> {

    return this.launcherList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedLauncherList>) => r.body as PaginatedLauncherList)
    );
  }

  /**
   * Path part for operation launcherRetrieve
   */
  static readonly LauncherRetrievePath = '/2.2.0/launcher/{id}/';

  /**
   * API endpoint that allows Launcher instances to be viewed.
   *
   * GET:
   * Return a list of all the existing launcher instances.
   *
   * FILTERS:
   * Parameters - 'id', 'serial_number', 'flight_proven', 'launcher_config', 'launcher_config__manufacturer'
   * Example - /2.2.0/launcher/?serial_number=B1046
   *
   * SEARCH EXAMPLE:
   * /2.2.0/launcher/?search=expended
   * Searches through serial number or status
   *
   * ORDERING:
   * Fields - 'id', 'flight_proven',
   * Example - /2.2.0/launcher/?order=flight_proven
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `launcherRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  launcherRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Launch Vehicle.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LauncherDetail>> {

    const rb = new RequestBuilder(this.rootUrl, LauncherService.LauncherRetrievePath, 'get');
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
        return r as StrictHttpResponse<LauncherDetail>;
      })
    );
  }

  /**
   * API endpoint that allows Launcher instances to be viewed.
   *
   * GET:
   * Return a list of all the existing launcher instances.
   *
   * FILTERS:
   * Parameters - 'id', 'serial_number', 'flight_proven', 'launcher_config', 'launcher_config__manufacturer'
   * Example - /2.2.0/launcher/?serial_number=B1046
   *
   * SEARCH EXAMPLE:
   * /2.2.0/launcher/?search=expended
   * Searches through serial number or status
   *
   * ORDERING:
   * Fields - 'id', 'flight_proven',
   * Example - /2.2.0/launcher/?order=flight_proven
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `launcherRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  launcherRetrieve(params: {

    /**
     * A unique integer value identifying this Launch Vehicle.
     */
    id: number;
    context?: HttpContext
  }
): Observable<LauncherDetail> {

    return this.launcherRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<LauncherDetail>) => r.body as LauncherDetail)
    );
  }

}
