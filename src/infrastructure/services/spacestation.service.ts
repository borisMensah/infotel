/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from 'src/base-service';
import { ApiConfiguration } from 'src/api-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { StrictHttpResponse } from 'src/strict-http-response';
import { map, filter } from 'rxjs/operators';

import { PaginatedSpaceStationList } from '../dto/paginated-space-station-list';
import { SpaceStationDetailed } from '../dto/space-station-detailed';
import { RequestBuilder } from 'src/request-builder';

@Injectable({
  providedIn: 'root',
})
export class SpacestationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation spacestationList
   */
  static readonly SpacestationListPath = '/2.2.0/spacestation/';

  /**
   * API endpoint that allows Space Stations to be viewed.
   *
   * GET:
   * Return a list of all the existing space stations.
   *
   * FILTERS:
   * Parameters - 'name', 'status', 'owners', 'orbit', 'type', 'owners__name', 'owners__abrev'
   * Example - /api/2.2.0/spacestation/?status=Active
   *
   * SEARCH EXAMPLE:
   * Example - /api/2.2.0/spacestation/?search=ISS
   * Searches through 'name', 'owners__name', 'owners__abbrev'
   *
   * ORDERING:
   * Fields - 'id', 'name', status', 'type', 'founded', 'volume'
   * Example - /api/2.2.0/spacestation/?ordering=id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `spacestationList()` instead.
   *
   * This method doesn't expect any request body.
   */
  spacestationList$Response(params?: {
    docked_vehicles?: number;
    docked_vehicles__gt?: number;
    docked_vehicles__gte?: number;
    docked_vehicles__lt?: number;
    docked_vehicles__lte?: number;
    id?: number;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    name__contains?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    onboard_crew?: number;
    onboard_crew__gt?: number;
    onboard_crew__gte?: number;
    onboard_crew__lt?: number;
    onboard_crew__lte?: number;
    orbit?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    owners?: Array<number>;

    /**
     * A search term.
     */
    search?: string;
    status?: number;
    type?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedSpaceStationList>> {

    const rb = new RequestBuilder(this.rootUrl, SpacestationService.SpacestationListPath, 'get');
    if (params) {
      rb.query('docked_vehicles', params.docked_vehicles, {});
      rb.query('docked_vehicles__gt', params.docked_vehicles__gt, {});
      rb.query('docked_vehicles__gte', params.docked_vehicles__gte, {});
      rb.query('docked_vehicles__lt', params.docked_vehicles__lt, {});
      rb.query('docked_vehicles__lte', params.docked_vehicles__lte, {});
      rb.query('id', params.id, {});
      rb.query('limit', params.limit, {});
      rb.query('name', params.name, {});
      rb.query('name__contains', params.name__contains, {});
      rb.query('offset', params.offset, {});
      rb.query('onboard_crew', params.onboard_crew, {});
      rb.query('onboard_crew__gt', params.onboard_crew__gt, {});
      rb.query('onboard_crew__gte', params.onboard_crew__gte, {});
      rb.query('onboard_crew__lt', params.onboard_crew__lt, {});
      rb.query('onboard_crew__lte', params.onboard_crew__lte, {});
      rb.query('orbit', params.orbit, {});
      rb.query('ordering', params.ordering, {});
      rb.query('owners', params.owners, {"style":"form","explode":true});
      rb.query('search', params.search, {});
      rb.query('status', params.status, {});
      rb.query('type', params.type, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedSpaceStationList>;
      })
    );
  }

  /**
   * API endpoint that allows Space Stations to be viewed.
   *
   * GET:
   * Return a list of all the existing space stations.
   *
   * FILTERS:
   * Parameters - 'name', 'status', 'owners', 'orbit', 'type', 'owners__name', 'owners__abrev'
   * Example - /api/2.2.0/spacestation/?status=Active
   *
   * SEARCH EXAMPLE:
   * Example - /api/2.2.0/spacestation/?search=ISS
   * Searches through 'name', 'owners__name', 'owners__abbrev'
   *
   * ORDERING:
   * Fields - 'id', 'name', status', 'type', 'founded', 'volume'
   * Example - /api/2.2.0/spacestation/?ordering=id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `spacestationList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  spacestationList(params?: {
    docked_vehicles?: number;
    docked_vehicles__gt?: number;
    docked_vehicles__gte?: number;
    docked_vehicles__lt?: number;
    docked_vehicles__lte?: number;
    id?: number;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    name__contains?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    onboard_crew?: number;
    onboard_crew__gt?: number;
    onboard_crew__gte?: number;
    onboard_crew__lt?: number;
    onboard_crew__lte?: number;
    orbit?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    owners?: Array<number>;

    /**
     * A search term.
     */
    search?: string;
    status?: number;
    type?: number;
    context?: HttpContext
  }
): Observable<PaginatedSpaceStationList> {

    return this.spacestationList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedSpaceStationList>) => r.body as PaginatedSpaceStationList)
    );
  }

  /**
   * Path part for operation spacestationRetrieve
   */
  static readonly SpacestationRetrievePath = '/2.2.0/spacestation/{id}/';

  /**
   * API endpoint that allows Space Stations to be viewed.
   *
   * GET:
   * Return a list of all the existing space stations.
   *
   * FILTERS:
   * Parameters - 'name', 'status', 'owners', 'orbit', 'type', 'owners__name', 'owners__abrev'
   * Example - /api/2.2.0/spacestation/?status=Active
   *
   * SEARCH EXAMPLE:
   * Example - /api/2.2.0/spacestation/?search=ISS
   * Searches through 'name', 'owners__name', 'owners__abbrev'
   *
   * ORDERING:
   * Fields - 'id', 'name', status', 'type', 'founded', 'volume'
   * Example - /api/2.2.0/spacestation/?ordering=id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `spacestationRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  spacestationRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Space Station.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SpaceStationDetailed>> {

    const rb = new RequestBuilder(this.rootUrl, SpacestationService.SpacestationRetrievePath, 'get');
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
        return r as StrictHttpResponse<SpaceStationDetailed>;
      })
    );
  }

  /**
   * API endpoint that allows Space Stations to be viewed.
   *
   * GET:
   * Return a list of all the existing space stations.
   *
   * FILTERS:
   * Parameters - 'name', 'status', 'owners', 'orbit', 'type', 'owners__name', 'owners__abrev'
   * Example - /api/2.2.0/spacestation/?status=Active
   *
   * SEARCH EXAMPLE:
   * Example - /api/2.2.0/spacestation/?search=ISS
   * Searches through 'name', 'owners__name', 'owners__abbrev'
   *
   * ORDERING:
   * Fields - 'id', 'name', status', 'type', 'founded', 'volume'
   * Example - /api/2.2.0/spacestation/?ordering=id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `spacestationRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  spacestationRetrieve(params: {

    /**
     * A unique integer value identifying this Space Station.
     */
    id: number;
    context?: HttpContext
  }
): Observable<SpaceStationDetailed> {

    return this.spacestationRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<SpaceStationDetailed>) => r.body as SpaceStationDetailed)
    );
  }

}
