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

import { DockingEventDetailed } from '../dto/docking-event-detailed';
import { PaginatedDockingEventList } from '../dto/paginated-docking-event-list';

@Injectable({
  providedIn: 'root',
})
export class DockingEventService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation dockingEventList
   */
  static readonly DockingEventListPath = '/2.2.0/docking_event/';

  /**
   * API endpoint that allows Docking Events to be viewed.
   *
   * GET:
   * Return a list of all the docking events.
   *
   * FILTERS:
   * Fields - 'space_station__id', 'flight_vehicle__id', 'docking_location__id'
   *
   *
   * MODE:
   * 'detailed'
   * EXAMPLE: ?mode=detailed
   *
   * ORDERING:
   * Fields - 'id', 'docking', 'departure'
   * Order reverse via Docking date.
   * Example - /2.2.0/docking_event/?ordering=-docking
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dockingEventList()` instead.
   *
   * This method doesn't expect any request body.
   */
  dockingEventList$Response(params?: {

    /**
     * Docking is greater than
     */
    docking__gt?: string;

    /**
     * Docking is greater than or equal to
     */
    docking__gte?: string;

    /**
     * Docking is less than
     */
    docking__lt?: string;

    /**
     * Docking is less than or equal to
     */
    docking__lte?: string;
    docking_location__id?: number;
    flight_vehicle__id?: number;

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
    space_station__id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedDockingEventList>> {

    const rb = new RequestBuilder(this.rootUrl, DockingEventService.DockingEventListPath, 'get');
    if (params) {
      rb.query('docking__gt', params.docking__gt, {});
      rb.query('docking__gte', params.docking__gte, {});
      rb.query('docking__lt', params.docking__lt, {});
      rb.query('docking__lte', params.docking__lte, {});
      rb.query('docking_location__id', params.docking_location__id, {});
      rb.query('flight_vehicle__id', params.flight_vehicle__id, {});
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
      rb.query('space_station__id', params.space_station__id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedDockingEventList>;
      })
    );
  }

  /**
   * API endpoint that allows Docking Events to be viewed.
   *
   * GET:
   * Return a list of all the docking events.
   *
   * FILTERS:
   * Fields - 'space_station__id', 'flight_vehicle__id', 'docking_location__id'
   *
   *
   * MODE:
   * 'detailed'
   * EXAMPLE: ?mode=detailed
   *
   * ORDERING:
   * Fields - 'id', 'docking', 'departure'
   * Order reverse via Docking date.
   * Example - /2.2.0/docking_event/?ordering=-docking
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dockingEventList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dockingEventList(params?: {

    /**
     * Docking is greater than
     */
    docking__gt?: string;

    /**
     * Docking is greater than or equal to
     */
    docking__gte?: string;

    /**
     * Docking is less than
     */
    docking__lt?: string;

    /**
     * Docking is less than or equal to
     */
    docking__lte?: string;
    docking_location__id?: number;
    flight_vehicle__id?: number;

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
    space_station__id?: number;
    context?: HttpContext
  }
): Observable<PaginatedDockingEventList> {

    return this.dockingEventList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedDockingEventList>) => r.body as PaginatedDockingEventList)
    );
  }

  /**
   * Path part for operation dockingEventRetrieve
   */
  static readonly DockingEventRetrievePath = '/2.2.0/docking_event/{id}/';

  /**
   * API endpoint that allows Docking Events to be viewed.
   *
   * GET:
   * Return a list of all the docking events.
   *
   * FILTERS:
   * Fields - 'space_station__id', 'flight_vehicle__id', 'docking_location__id'
   *
   *
   * MODE:
   * 'detailed'
   * EXAMPLE: ?mode=detailed
   *
   * ORDERING:
   * Fields - 'id', 'docking', 'departure'
   * Order reverse via Docking date.
   * Example - /2.2.0/docking_event/?ordering=-docking
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dockingEventRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  dockingEventRetrieve$Response(params: {

    /**
     * A unique integer value identifying this docking event.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DockingEventDetailed>> {

    const rb = new RequestBuilder(this.rootUrl, DockingEventService.DockingEventRetrievePath, 'get');
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
        return r as StrictHttpResponse<DockingEventDetailed>;
      })
    );
  }

  /**
   * API endpoint that allows Docking Events to be viewed.
   *
   * GET:
   * Return a list of all the docking events.
   *
   * FILTERS:
   * Fields - 'space_station__id', 'flight_vehicle__id', 'docking_location__id'
   *
   *
   * MODE:
   * 'detailed'
   * EXAMPLE: ?mode=detailed
   *
   * ORDERING:
   * Fields - 'id', 'docking', 'departure'
   * Order reverse via Docking date.
   * Example - /2.2.0/docking_event/?ordering=-docking
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dockingEventRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dockingEventRetrieve(params: {

    /**
     * A unique integer value identifying this docking event.
     */
    id: number;
    context?: HttpContext
  }
): Observable<DockingEventDetailed> {

    return this.dockingEventRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<DockingEventDetailed>) => r.body as DockingEventDetailed)
    );
  }

}
