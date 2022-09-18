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

import { PaginatedSpacecraftFlightList } from '../dto/paginated-spacecraft-flight-list';
import { PaginatedSpacecraftList } from '../dto/paginated-spacecraft-list';
import { SpacecraftDetailed } from '../dto/spacecraft-detailed';
import { SpacecraftFlightDetailed } from '../dto/spacecraft-flight-detailed';

@Injectable({
  providedIn: 'root',
})
export class SpacecraftService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation spacecraftList
   */
  static readonly SpacecraftListPath = '/2.2.0/spacecraft/';

  /**
   * API endpoint that allows Spacecrafts to be viewed.
   * A Spacecraft is a physically manufactured instance of a Spacecraft Configuration
   *
   * GET:
   * Return a list of all the existing spacecraft.
   *
   * FILTERS:
   * Parameters - 'name', 'status', 'spacecraft_config'
   * Example - /2.2.0/spacecraft/?status=1
   *
   * SEARCH EXAMPLE:
   * Example - /2.2.0/spacecraft/?search=Dragon
   *
   * ORDERING:
   * Fields - 'id'
   * Example - /2.2.0/spacecraft/?order=id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `spacecraftList()` instead.
   *
   * This method doesn't expect any request body.
   */
  spacecraftList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;
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
    spacecraft_config?: number;
    status?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedSpacecraftList>> {

    const rb = new RequestBuilder(this.rootUrl, SpacecraftService.SpacecraftListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('name', params.name, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
      rb.query('spacecraft_config', params.spacecraft_config, {});
      rb.query('status', params.status, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedSpacecraftList>;
      })
    );
  }

  /**
   * API endpoint that allows Spacecrafts to be viewed.
   * A Spacecraft is a physically manufactured instance of a Spacecraft Configuration
   *
   * GET:
   * Return a list of all the existing spacecraft.
   *
   * FILTERS:
   * Parameters - 'name', 'status', 'spacecraft_config'
   * Example - /2.2.0/spacecraft/?status=1
   *
   * SEARCH EXAMPLE:
   * Example - /2.2.0/spacecraft/?search=Dragon
   *
   * ORDERING:
   * Fields - 'id'
   * Example - /2.2.0/spacecraft/?order=id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `spacecraftList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  spacecraftList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;
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
    spacecraft_config?: number;
    status?: number;
    context?: HttpContext
  }
): Observable<PaginatedSpacecraftList> {

    return this.spacecraftList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedSpacecraftList>) => r.body as PaginatedSpacecraftList)
    );
  }

  /**
   * Path part for operation spacecraftRetrieve
   */
  static readonly SpacecraftRetrievePath = '/2.2.0/spacecraft/{id}/';

  /**
   * API endpoint that allows Spacecrafts to be viewed.
   * A Spacecraft is a physically manufactured instance of a Spacecraft Configuration
   *
   * GET:
   * Return a list of all the existing spacecraft.
   *
   * FILTERS:
   * Parameters - 'name', 'status', 'spacecraft_config'
   * Example - /2.2.0/spacecraft/?status=1
   *
   * SEARCH EXAMPLE:
   * Example - /2.2.0/spacecraft/?search=Dragon
   *
   * ORDERING:
   * Fields - 'id'
   * Example - /2.2.0/spacecraft/?order=id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `spacecraftRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  spacecraftRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Spacecraft.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SpacecraftDetailed>> {

    const rb = new RequestBuilder(this.rootUrl, SpacecraftService.SpacecraftRetrievePath, 'get');
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
        return r as StrictHttpResponse<SpacecraftDetailed>;
      })
    );
  }

  /**
   * API endpoint that allows Spacecrafts to be viewed.
   * A Spacecraft is a physically manufactured instance of a Spacecraft Configuration
   *
   * GET:
   * Return a list of all the existing spacecraft.
   *
   * FILTERS:
   * Parameters - 'name', 'status', 'spacecraft_config'
   * Example - /2.2.0/spacecraft/?status=1
   *
   * SEARCH EXAMPLE:
   * Example - /2.2.0/spacecraft/?search=Dragon
   *
   * ORDERING:
   * Fields - 'id'
   * Example - /2.2.0/spacecraft/?order=id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `spacecraftRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  spacecraftRetrieve(params: {

    /**
     * A unique integer value identifying this Spacecraft.
     */
    id: number;
    context?: HttpContext
  }
): Observable<SpacecraftDetailed> {

    return this.spacecraftRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<SpacecraftDetailed>) => r.body as SpacecraftDetailed)
    );
  }

  /**
   * Path part for operation spacecraftFlightList
   */
  static readonly SpacecraftFlightListPath = '/2.2.0/spacecraft/flight/';

  /**
   * API endpoint that allows a flight of a specific Spacecraft instances to be viewed.
   *
   * GET:
   * Return a list of all the existing Spacecraft flights.
   *
   * FILTERS:
   * Parameters - 'spacecraft'
   * Example - /api/2.2.0/launcher/?spacecraft=37
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `spacecraftFlightList()` instead.
   *
   * This method doesn't expect any request body.
   */
  spacecraftFlightList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    spacecraft?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedSpacecraftFlightList>> {

    const rb = new RequestBuilder(this.rootUrl, SpacecraftService.SpacecraftFlightListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('spacecraft', params.spacecraft, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedSpacecraftFlightList>;
      })
    );
  }

  /**
   * API endpoint that allows a flight of a specific Spacecraft instances to be viewed.
   *
   * GET:
   * Return a list of all the existing Spacecraft flights.
   *
   * FILTERS:
   * Parameters - 'spacecraft'
   * Example - /api/2.2.0/launcher/?spacecraft=37
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `spacecraftFlightList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  spacecraftFlightList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    spacecraft?: number;
    context?: HttpContext
  }
): Observable<PaginatedSpacecraftFlightList> {

    return this.spacecraftFlightList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedSpacecraftFlightList>) => r.body as PaginatedSpacecraftFlightList)
    );
  }

  /**
   * Path part for operation spacecraftFlightRetrieve
   */
  static readonly SpacecraftFlightRetrievePath = '/2.2.0/spacecraft/flight/{id}/';

  /**
   * API endpoint that allows a flight of a specific Spacecraft instances to be viewed.
   *
   * GET:
   * Return a list of all the existing Spacecraft flights.
   *
   * FILTERS:
   * Parameters - 'spacecraft'
   * Example - /api/2.2.0/launcher/?spacecraft=37
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `spacecraftFlightRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  spacecraftFlightRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Spacecraft Flight.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SpacecraftFlightDetailed>> {

    const rb = new RequestBuilder(this.rootUrl, SpacecraftService.SpacecraftFlightRetrievePath, 'get');
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
        return r as StrictHttpResponse<SpacecraftFlightDetailed>;
      })
    );
  }

  /**
   * API endpoint that allows a flight of a specific Spacecraft instances to be viewed.
   *
   * GET:
   * Return a list of all the existing Spacecraft flights.
   *
   * FILTERS:
   * Parameters - 'spacecraft'
   * Example - /api/2.2.0/launcher/?spacecraft=37
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `spacecraftFlightRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  spacecraftFlightRetrieve(params: {

    /**
     * A unique integer value identifying this Spacecraft Flight.
     */
    id: number;
    context?: HttpContext
  }
): Observable<SpacecraftFlightDetailed> {

    return this.spacecraftFlightRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<SpacecraftFlightDetailed>) => r.body as SpacecraftFlightDetailed)
    );
  }

}
