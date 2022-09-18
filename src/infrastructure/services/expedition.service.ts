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

import { ExpeditionDetail } from '../dto/expedition-detail';
import { PaginatedExpeditionList } from '../dto/paginated-expedition-list';

@Injectable({
  providedIn: 'root',
})
export class ExpeditionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation expeditionList
   */
  static readonly ExpeditionListPath = '/2.2.0/expedition/';

  /**
   * API endpoint that allows Expeditions to be viewed.
   *
   * GET:
   * Return a list of all the existing expeditions.
   *
   * MODE:
   * Normal and Detailed
   * /2.2.0/expedition/?mode=detailed
   *
   * FILTERS:
   * Fields - 'name', 'crew__astronaut', 'crew__astronaut__agency', 'space_station'
   *
   * Get all Expeditions with the Space Station ID of 1.
   * Example - /2.2.0/expedition/?space_station=1&mode=detailed
   *
   * Search for all Expeditions with the Astronaut named John
   * Example - /2.2.0/expedition/?search=John
   *
   * ORDERING:
   * Fields - 'id', 'start', 'end'
   * Order reverse via Start date.
   * Example - /2.2.0/astronaut/?order=-start
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `expeditionList()` instead.
   *
   * This method doesn't expect any request body.
   */
  expeditionList$Response(params?: {
    crew__astronaut?: number;
    crew__astronaut__agency?: number;

    /**
     * End is greater than
     */
    end__gt?: string;

    /**
     * End is greater than or equal to
     */
    end__gte?: string;

    /**
     * End is less than
     */
    end__lt?: string;

    /**
     * End is greater than or equal to
     */
    end__lte?: string;

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
    space_station?: number;

    /**
     * Start is greater than
     */
    start__gt?: string;

    /**
     * Start is greater than or equal to
     */
    start__gte?: string;

    /**
     * Start is less than
     */
    start__lt?: string;

    /**
     * Start is greater than or equal to
     */
    start__lte?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedExpeditionList>> {

    const rb = new RequestBuilder(this.rootUrl, ExpeditionService.ExpeditionListPath, 'get');
    if (params) {
      rb.query('crew__astronaut', params.crew__astronaut, {});
      rb.query('crew__astronaut__agency', params.crew__astronaut__agency, {});
      rb.query('end__gt', params.end__gt, {});
      rb.query('end__gte', params.end__gte, {});
      rb.query('end__lt', params.end__lt, {});
      rb.query('end__lte', params.end__lte, {});
      rb.query('limit', params.limit, {});
      rb.query('name', params.name, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
      rb.query('space_station', params.space_station, {});
      rb.query('start__gt', params.start__gt, {});
      rb.query('start__gte', params.start__gte, {});
      rb.query('start__lt', params.start__lt, {});
      rb.query('start__lte', params.start__lte, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedExpeditionList>;
      })
    );
  }

  /**
   * API endpoint that allows Expeditions to be viewed.
   *
   * GET:
   * Return a list of all the existing expeditions.
   *
   * MODE:
   * Normal and Detailed
   * /2.2.0/expedition/?mode=detailed
   *
   * FILTERS:
   * Fields - 'name', 'crew__astronaut', 'crew__astronaut__agency', 'space_station'
   *
   * Get all Expeditions with the Space Station ID of 1.
   * Example - /2.2.0/expedition/?space_station=1&mode=detailed
   *
   * Search for all Expeditions with the Astronaut named John
   * Example - /2.2.0/expedition/?search=John
   *
   * ORDERING:
   * Fields - 'id', 'start', 'end'
   * Order reverse via Start date.
   * Example - /2.2.0/astronaut/?order=-start
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `expeditionList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  expeditionList(params?: {
    crew__astronaut?: number;
    crew__astronaut__agency?: number;

    /**
     * End is greater than
     */
    end__gt?: string;

    /**
     * End is greater than or equal to
     */
    end__gte?: string;

    /**
     * End is less than
     */
    end__lt?: string;

    /**
     * End is greater than or equal to
     */
    end__lte?: string;

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
    space_station?: number;

    /**
     * Start is greater than
     */
    start__gt?: string;

    /**
     * Start is greater than or equal to
     */
    start__gte?: string;

    /**
     * Start is less than
     */
    start__lt?: string;

    /**
     * Start is greater than or equal to
     */
    start__lte?: string;
    context?: HttpContext
  }
): Observable<PaginatedExpeditionList> {

    return this.expeditionList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedExpeditionList>) => r.body as PaginatedExpeditionList)
    );
  }

  /**
   * Path part for operation expeditionRetrieve
   */
  static readonly ExpeditionRetrievePath = '/2.2.0/expedition/{id}/';

  /**
   * API endpoint that allows Expeditions to be viewed.
   *
   * GET:
   * Return a list of all the existing expeditions.
   *
   * MODE:
   * Normal and Detailed
   * /2.2.0/expedition/?mode=detailed
   *
   * FILTERS:
   * Fields - 'name', 'crew__astronaut', 'crew__astronaut__agency', 'space_station'
   *
   * Get all Expeditions with the Space Station ID of 1.
   * Example - /2.2.0/expedition/?space_station=1&mode=detailed
   *
   * Search for all Expeditions with the Astronaut named John
   * Example - /2.2.0/expedition/?search=John
   *
   * ORDERING:
   * Fields - 'id', 'start', 'end'
   * Order reverse via Start date.
   * Example - /2.2.0/astronaut/?order=-start
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `expeditionRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  expeditionRetrieve$Response(params: {

    /**
     * A unique integer value identifying this expedition.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ExpeditionDetail>> {

    const rb = new RequestBuilder(this.rootUrl, ExpeditionService.ExpeditionRetrievePath, 'get');
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
        return r as StrictHttpResponse<ExpeditionDetail>;
      })
    );
  }

  /**
   * API endpoint that allows Expeditions to be viewed.
   *
   * GET:
   * Return a list of all the existing expeditions.
   *
   * MODE:
   * Normal and Detailed
   * /2.2.0/expedition/?mode=detailed
   *
   * FILTERS:
   * Fields - 'name', 'crew__astronaut', 'crew__astronaut__agency', 'space_station'
   *
   * Get all Expeditions with the Space Station ID of 1.
   * Example - /2.2.0/expedition/?space_station=1&mode=detailed
   *
   * Search for all Expeditions with the Astronaut named John
   * Example - /2.2.0/expedition/?search=John
   *
   * ORDERING:
   * Fields - 'id', 'start', 'end'
   * Order reverse via Start date.
   * Example - /2.2.0/astronaut/?order=-start
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `expeditionRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  expeditionRetrieve(params: {

    /**
     * A unique integer value identifying this expedition.
     */
    id: number;
    context?: HttpContext
  }
): Observable<ExpeditionDetail> {

    return this.expeditionRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<ExpeditionDetail>) => r.body as ExpeditionDetail)
    );
  }

}
