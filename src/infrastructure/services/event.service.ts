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

import { Events } from '../dto/events';
import { PaginatedEventsList } from '../dto/paginated-events-list';

@Injectable({
  providedIn: 'root',
})
export class EventService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation eventList
   */
  static readonly EventListPath = '/2.2.0/event/';

  /**
   * API endpoint that allows all Events to be viewed.
   *
   * GET:
   * Return a list of all Events
   *
   * SEARCH EXAMPLE:
   * /2.2.0/event/?search=Dragon
   * Searches through name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventList()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventList$Response(params?: {
    id?: number;

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    program?: Array<number>;

    /**
     * A search term.
     */
    search?: string;
    slug?: string;
    type?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedEventsList>> {

    const rb = new RequestBuilder(this.rootUrl, EventService.EventListPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('program', params.program, {"style":"form","explode":true});
      rb.query('search', params.search, {});
      rb.query('slug', params.slug, {});
      rb.query('type', params.type, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedEventsList>;
      })
    );
  }

  /**
   * API endpoint that allows all Events to be viewed.
   *
   * GET:
   * Return a list of all Events
   *
   * SEARCH EXAMPLE:
   * /2.2.0/event/?search=Dragon
   * Searches through name
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventList(params?: {
    id?: number;

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    program?: Array<number>;

    /**
     * A search term.
     */
    search?: string;
    slug?: string;
    type?: number;
    context?: HttpContext
  }
): Observable<PaginatedEventsList> {

    return this.eventList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedEventsList>) => r.body as PaginatedEventsList)
    );
  }

  /**
   * Path part for operation eventRetrieve
   */
  static readonly EventRetrievePath = '/2.2.0/event/{id}/';

  /**
   * API endpoint that allows all Events to be viewed.
   *
   * GET:
   * Return a list of all Events
   *
   * SEARCH EXAMPLE:
   * /2.2.0/event/?search=Dragon
   * Searches through name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Event.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Events>> {

    const rb = new RequestBuilder(this.rootUrl, EventService.EventRetrievePath, 'get');
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
        return r as StrictHttpResponse<Events>;
      })
    );
  }

  /**
   * API endpoint that allows all Events to be viewed.
   *
   * GET:
   * Return a list of all Events
   *
   * SEARCH EXAMPLE:
   * /2.2.0/event/?search=Dragon
   * Searches through name
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventRetrieve(params: {

    /**
     * A unique integer value identifying this Event.
     */
    id: number;
    context?: HttpContext
  }
): Observable<Events> {

    return this.eventRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<Events>) => r.body as Events)
    );
  }

  /**
   * Path part for operation eventPreviousList
   */
  static readonly EventPreviousListPath = '/2.2.0/event/previous/';

  /**
   * API endpoint that allows past Events to be viewed.
   *
   * GET:
   * Return a list of past Events
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventPreviousList()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventPreviousList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    program?: Array<number>;

    /**
     * A search term.
     */
    search?: string;
    type?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedEventsList>> {

    const rb = new RequestBuilder(this.rootUrl, EventService.EventPreviousListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('program', params.program, {"style":"form","explode":true});
      rb.query('search', params.search, {});
      rb.query('type', params.type, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedEventsList>;
      })
    );
  }

  /**
   * API endpoint that allows past Events to be viewed.
   *
   * GET:
   * Return a list of past Events
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventPreviousList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventPreviousList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    program?: Array<number>;

    /**
     * A search term.
     */
    search?: string;
    type?: number;
    context?: HttpContext
  }
): Observable<PaginatedEventsList> {

    return this.eventPreviousList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedEventsList>) => r.body as PaginatedEventsList)
    );
  }

  /**
   * Path part for operation eventPreviousRetrieve
   */
  static readonly EventPreviousRetrievePath = '/2.2.0/event/previous/{id}/';

  /**
   * API endpoint that allows past Events to be viewed.
   *
   * GET:
   * Return a list of past Events
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventPreviousRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventPreviousRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Event.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Events>> {

    const rb = new RequestBuilder(this.rootUrl, EventService.EventPreviousRetrievePath, 'get');
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
        return r as StrictHttpResponse<Events>;
      })
    );
  }

  /**
   * API endpoint that allows past Events to be viewed.
   *
   * GET:
   * Return a list of past Events
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventPreviousRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventPreviousRetrieve(params: {

    /**
     * A unique integer value identifying this Event.
     */
    id: number;
    context?: HttpContext
  }
): Observable<Events> {

    return this.eventPreviousRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<Events>) => r.body as Events)
    );
  }

  /**
   * Path part for operation eventUpcomingList
   */
  static readonly EventUpcomingListPath = '/2.2.0/event/upcoming/';

  /**
   * API endpoint that returns future Event objects and events from the last twenty-four hours.
   *
   * FILTERS:
   * 'hide_recent_previous'
   *
   * GET:
   * Return a list of future Events
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventUpcomingList()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventUpcomingList$Response(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    program?: Array<number>;

    /**
     * A search term.
     */
    search?: string;
    type?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedEventsList>> {

    const rb = new RequestBuilder(this.rootUrl, EventService.EventUpcomingListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('program', params.program, {"style":"form","explode":true});
      rb.query('search', params.search, {});
      rb.query('type', params.type, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedEventsList>;
      })
    );
  }

  /**
   * API endpoint that returns future Event objects and events from the last twenty-four hours.
   *
   * FILTERS:
   * 'hide_recent_previous'
   *
   * GET:
   * Return a list of future Events
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventUpcomingList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventUpcomingList(params?: {

    /**
     * Number of results to return per page.
     */
    limit?: number;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    program?: Array<number>;

    /**
     * A search term.
     */
    search?: string;
    type?: number;
    context?: HttpContext
  }
): Observable<PaginatedEventsList> {

    return this.eventUpcomingList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedEventsList>) => r.body as PaginatedEventsList)
    );
  }

  /**
   * Path part for operation eventUpcomingRetrieve
   */
  static readonly EventUpcomingRetrievePath = '/2.2.0/event/upcoming/{id}/';

  /**
   * API endpoint that returns future Event objects and events from the last twenty-four hours.
   *
   * FILTERS:
   * 'hide_recent_previous'
   *
   * GET:
   * Return a list of future Events
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `eventUpcomingRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventUpcomingRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Event.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Events>> {

    const rb = new RequestBuilder(this.rootUrl, EventService.EventUpcomingRetrievePath, 'get');
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
        return r as StrictHttpResponse<Events>;
      })
    );
  }

  /**
   * API endpoint that returns future Event objects and events from the last twenty-four hours.
   *
   * FILTERS:
   * 'hide_recent_previous'
   *
   * GET:
   * Return a list of future Events
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `eventUpcomingRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  eventUpcomingRetrieve(params: {

    /**
     * A unique integer value identifying this Event.
     */
    id: number;
    context?: HttpContext
  }
): Observable<Events> {

    return this.eventUpcomingRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<Events>) => r.body as Events)
    );
  }

}
