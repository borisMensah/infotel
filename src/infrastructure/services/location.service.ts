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

import { LocationDetail } from '../dto/location-detail';
import { PaginatedLocationList } from '../dto/paginated-location-list';

@Injectable({
  providedIn: 'root',
})
export class LocationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation locationList
   */
  static readonly LocationListPath = '/2.2.0/location/';

  /**
   * API endpoint that allows Location instances to be viewed.
   *
   * GET:
   * Return a list of all the existing location instances.
   *
   * FILTERS:
   * Parameters - 'name', 'country_code', 'id'
   * Example - /2.2.0/location/?country_code=USA
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationList()` instead.
   *
   * This method doesn't expect any request body.
   */
  locationList$Response(params?: {
    country_code?: string;
    country_code__contains?: string;
    id?: number;
    id__gt?: number;
    id__gte?: number;
    id__lt?: number;
    id__lte?: number;
    launch_library_id?: number;
    launch_library_id__contains?: number;

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

    /**
     * A search term.
     */
    search?: string;
    total_landing_count?: number;
    total_landing_count__gt?: number;
    total_landing_count__gte?: number;
    total_landing_count__lt?: number;
    total_landing_count__lte?: number;
    total_launch_count?: number;
    total_launch_count__gt?: number;
    total_launch_count__gte?: number;
    total_launch_count__lt?: number;
    total_launch_count__lte?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedLocationList>> {

    const rb = new RequestBuilder(this.rootUrl, LocationService.LocationListPath, 'get');
    if (params) {
      rb.query('country_code', params.country_code, {});
      rb.query('country_code__contains', params.country_code__contains, {});
      rb.query('id', params.id, {});
      rb.query('id__gt', params.id__gt, {});
      rb.query('id__gte', params.id__gte, {});
      rb.query('id__lt', params.id__lt, {});
      rb.query('id__lte', params.id__lte, {});
      rb.query('launch_library_id', params.launch_library_id, {});
      rb.query('launch_library_id__contains', params.launch_library_id__contains, {});
      rb.query('limit', params.limit, {});
      rb.query('name', params.name, {});
      rb.query('name__contains', params.name__contains, {});
      rb.query('offset', params.offset, {});
      rb.query('search', params.search, {});
      rb.query('total_landing_count', params.total_landing_count, {});
      rb.query('total_landing_count__gt', params.total_landing_count__gt, {});
      rb.query('total_landing_count__gte', params.total_landing_count__gte, {});
      rb.query('total_landing_count__lt', params.total_landing_count__lt, {});
      rb.query('total_landing_count__lte', params.total_landing_count__lte, {});
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
        return r as StrictHttpResponse<PaginatedLocationList>;
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
   * Parameters - 'name', 'country_code', 'id'
   * Example - /2.2.0/location/?country_code=USA
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  locationList(params?: {
    country_code?: string;
    country_code__contains?: string;
    id?: number;
    id__gt?: number;
    id__gte?: number;
    id__lt?: number;
    id__lte?: number;
    launch_library_id?: number;
    launch_library_id__contains?: number;

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

    /**
     * A search term.
     */
    search?: string;
    total_landing_count?: number;
    total_landing_count__gt?: number;
    total_landing_count__gte?: number;
    total_landing_count__lt?: number;
    total_landing_count__lte?: number;
    total_launch_count?: number;
    total_launch_count__gt?: number;
    total_launch_count__gte?: number;
    total_launch_count__lt?: number;
    total_launch_count__lte?: number;
    context?: HttpContext
  }
): Observable<PaginatedLocationList> {

    return this.locationList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedLocationList>) => r.body as PaginatedLocationList)
    );
  }

  /**
   * Path part for operation locationRetrieve
   */
  static readonly LocationRetrievePath = '/2.2.0/location/{id}/';

  /**
   * API endpoint that allows Location instances to be viewed.
   *
   * GET:
   * Return a list of all the existing location instances.
   *
   * FILTERS:
   * Parameters - 'name', 'country_code', 'id'
   * Example - /2.2.0/location/?country_code=USA
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `locationRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  locationRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Location.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LocationDetail>> {

    const rb = new RequestBuilder(this.rootUrl, LocationService.LocationRetrievePath, 'get');
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
        return r as StrictHttpResponse<LocationDetail>;
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
   * Parameters - 'name', 'country_code', 'id'
   * Example - /2.2.0/location/?country_code=USA
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `locationRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  locationRetrieve(params: {

    /**
     * A unique integer value identifying this Location.
     */
    id: number;
    context?: HttpContext
  }
): Observable<LocationDetail> {

    return this.locationRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<LocationDetail>) => r.body as LocationDetail)
    );
  }

}
