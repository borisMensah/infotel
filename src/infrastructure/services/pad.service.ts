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

import { Pad } from '../dto/pad';
import { PaginatedPadList } from '../dto/paginated-pad-list';

@Injectable({
  providedIn: 'root',
})
export class PadService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation padList
   */
  static readonly PadListPath = '/2.2.0/pad/';

  /**
   * API endpoint that allows Location instances to be viewed.
   *
   * GET:
   * Return a list of all the existing location instances.
   *
   * FILTERS:
   * Parameters - 'id', 'agency_id', 'name', 'name__contains', 'latitude', 'latitude__contains', 'longitude',
   * 'longitude__contains', 'location__name', 'location__name__contains', 'location__id', 'orbital_launch_attempt_count',
   * 'total_launch_count'
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `padList()` instead.
   *
   * This method doesn't expect any request body.
   */
  padList$Response(params?: {
    agency_id?: number;
    agency_id__contains?: number;
    id?: number;
    id__contains?: number;
    latitude?: string;
    latitude__contains?: string;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    location__id?: number;
    location__name?: string;
    location__name__contains?: string;
    longitude?: string;
    longitude__contains?: string;
    name?: string;
    name__contains?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    orbital_launch_attempt_count?: number;
    orbital_launch_attempt_count__gt?: number;
    orbital_launch_attempt_count__gte?: number;
    orbital_launch_attempt_count__lt?: number;
    orbital_launch_attempt_count__lte?: number;

    /**
     * A search term.
     */
    search?: string;
    total_launch_count?: number;
    total_launch_count__gt?: number;
    total_launch_count__gte?: number;
    total_launch_count__lt?: number;
    total_launch_count__lte?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedPadList>> {

    const rb = new RequestBuilder(this.rootUrl, PadService.PadListPath, 'get');
    if (params) {
      rb.query('agency_id', params.agency_id, {});
      rb.query('agency_id__contains', params.agency_id__contains, {});
      rb.query('id', params.id, {});
      rb.query('id__contains', params.id__contains, {});
      rb.query('latitude', params.latitude, {});
      rb.query('latitude__contains', params.latitude__contains, {});
      rb.query('limit', params.limit, {});
      rb.query('location__id', params.location__id, {});
      rb.query('location__name', params.location__name, {});
      rb.query('location__name__contains', params.location__name__contains, {});
      rb.query('longitude', params.longitude, {});
      rb.query('longitude__contains', params.longitude__contains, {});
      rb.query('name', params.name, {});
      rb.query('name__contains', params.name__contains, {});
      rb.query('offset', params.offset, {});
      rb.query('orbital_launch_attempt_count', params.orbital_launch_attempt_count, {});
      rb.query('orbital_launch_attempt_count__gt', params.orbital_launch_attempt_count__gt, {});
      rb.query('orbital_launch_attempt_count__gte', params.orbital_launch_attempt_count__gte, {});
      rb.query('orbital_launch_attempt_count__lt', params.orbital_launch_attempt_count__lt, {});
      rb.query('orbital_launch_attempt_count__lte', params.orbital_launch_attempt_count__lte, {});
      rb.query('search', params.search, {});
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
        return r as StrictHttpResponse<PaginatedPadList>;
      })
    );
  }

  /**
   * API endpoint that allows Location instances to be viewed.
   *
   * GET:
   * Return a list of all the existing location instances.
   *
   * FILTERS:
   * Parameters - 'id', 'agency_id', 'name', 'name__contains', 'latitude', 'latitude__contains', 'longitude',
   * 'longitude__contains', 'location__name', 'location__name__contains', 'location__id', 'orbital_launch_attempt_count',
   * 'total_launch_count'
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `padList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  padList(params?: {
    agency_id?: number;
    agency_id__contains?: number;
    id?: number;
    id__contains?: number;
    latitude?: string;
    latitude__contains?: string;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    location__id?: number;
    location__name?: string;
    location__name__contains?: string;
    longitude?: string;
    longitude__contains?: string;
    name?: string;
    name__contains?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    orbital_launch_attempt_count?: number;
    orbital_launch_attempt_count__gt?: number;
    orbital_launch_attempt_count__gte?: number;
    orbital_launch_attempt_count__lt?: number;
    orbital_launch_attempt_count__lte?: number;

    /**
     * A search term.
     */
    search?: string;
    total_launch_count?: number;
    total_launch_count__gt?: number;
    total_launch_count__gte?: number;
    total_launch_count__lt?: number;
    total_launch_count__lte?: number;
    context?: HttpContext
  }
): Observable<PaginatedPadList> {

    return this.padList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedPadList>) => r.body as PaginatedPadList)
    );
  }

  /**
   * Path part for operation padRetrieve
   */
  static readonly PadRetrievePath = '/2.2.0/pad/{id}/';

  /**
   * API endpoint that allows Location instances to be viewed.
   *
   * GET:
   * Return a list of all the existing location instances.
   *
   * FILTERS:
   * Parameters - 'id', 'agency_id', 'name', 'name__contains', 'latitude', 'latitude__contains', 'longitude',
   * 'longitude__contains', 'location__name', 'location__name__contains', 'location__id', 'orbital_launch_attempt_count',
   * 'total_launch_count'
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `padRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  padRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Pad.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Pad>> {

    const rb = new RequestBuilder(this.rootUrl, PadService.PadRetrievePath, 'get');
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
        return r as StrictHttpResponse<Pad>;
      })
    );
  }

  /**
   * API endpoint that allows Location instances to be viewed.
   *
   * GET:
   * Return a list of all the existing location instances.
   *
   * FILTERS:
   * Parameters - 'id', 'agency_id', 'name', 'name__contains', 'latitude', 'latitude__contains', 'longitude',
   * 'longitude__contains', 'location__name', 'location__name__contains', 'location__id', 'orbital_launch_attempt_count',
   * 'total_launch_count'
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `padRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  padRetrieve(params: {

    /**
     * A unique integer value identifying this Pad.
     */
    id: number;
    context?: HttpContext
  }
): Observable<Pad> {

    return this.padRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<Pad>) => r.body as Pad)
    );
  }

}
