/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from 'src/base-service';
import { ApiConfiguration } from 'src/api-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { StrictHttpResponse } from 'src/strict-http-response';
import { map, filter } from 'rxjs/operators';

import { PaginatedUpdateList } from '../dto/paginated-update-list';
import { Update } from '../dto/update';
import { RequestBuilder } from 'src/request-builder';

@Injectable({
  providedIn: 'root',
})
export class UpdatesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updatesList
   */
  static readonly UpdatesListPath = '/2.2.0/updates/';

  /**
   * API endpoint that allows Updates to be viewed.
   *
   * GET:
   * Return a list of all the existing Updates.
   *
   * FILTERS:
   * Parameters - 'created_on', 'launch__id', 'program__id', 'launch__launch_service_provider__id',
   * Example - /api/2.2.0/updates/?status=Active
   *
   *
   * ORDERING:
   * Fields - 'created_on',
   * Example - /api/2.2.0/updates/?ordering=-created_on
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatesList()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatesList$Response(params?: {
    created_on?: string;
    launch?: string;
    launch__launch_service_provider?: number;

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
    program?: number;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedUpdateList>> {

    const rb = new RequestBuilder(this.rootUrl, UpdatesService.UpdatesListPath, 'get');
    if (params) {
      rb.query('created_on', params.created_on, {});
      rb.query('launch', params.launch, {});
      rb.query('launch__launch_service_provider', params.launch__launch_service_provider, {});
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('program', params.program, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedUpdateList>;
      })
    );
  }

  /**
   * API endpoint that allows Updates to be viewed.
   *
   * GET:
   * Return a list of all the existing Updates.
   *
   * FILTERS:
   * Parameters - 'created_on', 'launch__id', 'program__id', 'launch__launch_service_provider__id',
   * Example - /api/2.2.0/updates/?status=Active
   *
   *
   * ORDERING:
   * Fields - 'created_on',
   * Example - /api/2.2.0/updates/?ordering=-created_on
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatesList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatesList(params?: {
    created_on?: string;
    launch?: string;
    launch__launch_service_provider?: number;

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
    program?: number;

    /**
     * A search term.
     */
    search?: string;
    context?: HttpContext
  }
): Observable<PaginatedUpdateList> {

    return this.updatesList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedUpdateList>) => r.body as PaginatedUpdateList)
    );
  }

  /**
   * Path part for operation updatesRetrieve
   */
  static readonly UpdatesRetrievePath = '/2.2.0/updates/{id}/';

  /**
   * API endpoint that allows Updates to be viewed.
   *
   * GET:
   * Return a list of all the existing Updates.
   *
   * FILTERS:
   * Parameters - 'created_on', 'launch__id', 'program__id', 'launch__launch_service_provider__id',
   * Example - /api/2.2.0/updates/?status=Active
   *
   *
   * ORDERING:
   * Fields - 'created_on',
   * Example - /api/2.2.0/updates/?ordering=-created_on
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatesRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatesRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Update.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Update>> {

    const rb = new RequestBuilder(this.rootUrl, UpdatesService.UpdatesRetrievePath, 'get');
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
        return r as StrictHttpResponse<Update>;
      })
    );
  }

  /**
   * API endpoint that allows Updates to be viewed.
   *
   * GET:
   * Return a list of all the existing Updates.
   *
   * FILTERS:
   * Parameters - 'created_on', 'launch__id', 'program__id', 'launch__launch_service_provider__id',
   * Example - /api/2.2.0/updates/?status=Active
   *
   *
   * ORDERING:
   * Fields - 'created_on',
   * Example - /api/2.2.0/updates/?ordering=-created_on
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatesRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatesRetrieve(params: {

    /**
     * A unique integer value identifying this Update.
     */
    id: number;
    context?: HttpContext
  }
): Observable<Update> {

    return this.updatesRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<Update>) => r.body as Update)
    );
  }

}
