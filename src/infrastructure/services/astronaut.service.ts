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

import { AstronautDetailed } from '../dto/astronaut-detailed';
import { PaginatedAstronautNormalList } from '../dto/paginated-astronaut-normal-list';

@Injectable({
  providedIn: 'root',
})
export class AstronautService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation astronautList
   */
  static readonly AstronautListPath = '/2.2.0/astronaut/';

  /**
   * API endpoint that allows Astronaut to be viewed.
   *
   * GET:
   * Return a list of all the existing astronauts.
   *
   * MODE:
   * Normal, List, LaunchList and Detailed
   * /2.2.0/astronaut/?mode=detailed
   *
   * FILTERS:
   * Parameters - 'name', 'status', 'nationality', 'agency__name', 'agency__abbrev', 'date_of_birth',
   *  'date_of_death', 'status_ids', 'is_human', 'type__id', 'has_flown', 'in_space'
   * Example - /2.2.0/astronaut/?nationality=American
   *
   * SEARCH EXAMPLE:
   * /2.2.0/astronaut/?search=armstrong
   * Searches through name, nationality and agency name
   *
   * ORDERING:
   * Fields - 'name', 'status', 'date_of_birth'
   * Example - /2.2.0/astronaut/?order=name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `astronautList()` instead.
   *
   * This method doesn't expect any request body.
   */
  astronautList$Response(params?: {
    age?: number;
    age__gt?: number;
    age__gte?: number;
    age__lt?: number;
    age__lte?: number;
    date_of_birth?: string;
    date_of_birth__gt?: string;
    date_of_birth__gte?: string;
    date_of_birth__lt?: string;
    date_of_birth__lte?: string;
    date_of_death?: string;
    date_of_death__gt?: string;
    date_of_death__gte?: string;
    date_of_death__lt?: string;
    date_of_death__lte?: string;
    flights_count?: number;
    flights_count__gt?: number;
    flights_count__gte?: number;
    flights_count__lt?: number;
    flights_count__lte?: number;
    landings_count?: number;
    landings_count__gt?: number;
    landings_count__gte?: number;
    landings_count__lt?: number;
    landings_count__lte?: number;

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
    type__id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedAstronautNormalList>> {

    const rb = new RequestBuilder(this.rootUrl, AstronautService.AstronautListPath, 'get');
    if (params) {
      rb.query('age', params.age, {});
      rb.query('age__gt', params.age__gt, {});
      rb.query('age__gte', params.age__gte, {});
      rb.query('age__lt', params.age__lt, {});
      rb.query('age__lte', params.age__lte, {});
      rb.query('date_of_birth', params.date_of_birth, {});
      rb.query('date_of_birth__gt', params.date_of_birth__gt, {});
      rb.query('date_of_birth__gte', params.date_of_birth__gte, {});
      rb.query('date_of_birth__lt', params.date_of_birth__lt, {});
      rb.query('date_of_birth__lte', params.date_of_birth__lte, {});
      rb.query('date_of_death', params.date_of_death, {});
      rb.query('date_of_death__gt', params.date_of_death__gt, {});
      rb.query('date_of_death__gte', params.date_of_death__gte, {});
      rb.query('date_of_death__lt', params.date_of_death__lt, {});
      rb.query('date_of_death__lte', params.date_of_death__lte, {});
      rb.query('flights_count', params.flights_count, {});
      rb.query('flights_count__gt', params.flights_count__gt, {});
      rb.query('flights_count__gte', params.flights_count__gte, {});
      rb.query('flights_count__lt', params.flights_count__lt, {});
      rb.query('flights_count__lte', params.flights_count__lte, {});
      rb.query('landings_count', params.landings_count, {});
      rb.query('landings_count__gt', params.landings_count__gt, {});
      rb.query('landings_count__gte', params.landings_count__gte, {});
      rb.query('landings_count__lt', params.landings_count__lt, {});
      rb.query('landings_count__lte', params.landings_count__lte, {});
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
      rb.query('type__id', params.type__id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedAstronautNormalList>;
      })
    );
  }

  /**
   * API endpoint that allows Astronaut to be viewed.
   *
   * GET:
   * Return a list of all the existing astronauts.
   *
   * MODE:
   * Normal, List, LaunchList and Detailed
   * /2.2.0/astronaut/?mode=detailed
   *
   * FILTERS:
   * Parameters - 'name', 'status', 'nationality', 'agency__name', 'agency__abbrev', 'date_of_birth',
   *  'date_of_death', 'status_ids', 'is_human', 'type__id', 'has_flown', 'in_space'
   * Example - /2.2.0/astronaut/?nationality=American
   *
   * SEARCH EXAMPLE:
   * /2.2.0/astronaut/?search=armstrong
   * Searches through name, nationality and agency name
   *
   * ORDERING:
   * Fields - 'name', 'status', 'date_of_birth'
   * Example - /2.2.0/astronaut/?order=name
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `astronautList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  astronautList(params?: {
    age?: number;
    age__gt?: number;
    age__gte?: number;
    age__lt?: number;
    age__lte?: number;
    date_of_birth?: string;
    date_of_birth__gt?: string;
    date_of_birth__gte?: string;
    date_of_birth__lt?: string;
    date_of_birth__lte?: string;
    date_of_death?: string;
    date_of_death__gt?: string;
    date_of_death__gte?: string;
    date_of_death__lt?: string;
    date_of_death__lte?: string;
    flights_count?: number;
    flights_count__gt?: number;
    flights_count__gte?: number;
    flights_count__lt?: number;
    flights_count__lte?: number;
    landings_count?: number;
    landings_count__gt?: number;
    landings_count__gte?: number;
    landings_count__lt?: number;
    landings_count__lte?: number;

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
    type__id?: number;
    context?: HttpContext
  }
): Observable<PaginatedAstronautNormalList> {

    return this.astronautList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedAstronautNormalList>) => r.body as PaginatedAstronautNormalList)
    );
  }

  /**
   * Path part for operation astronautRetrieve
   */
  static readonly AstronautRetrievePath = '/2.2.0/astronaut/{id}/';

  /**
   * API endpoint that allows Astronaut to be viewed.
   *
   * GET:
   * Return a list of all the existing astronauts.
   *
   * MODE:
   * Normal, List, LaunchList and Detailed
   * /2.2.0/astronaut/?mode=detailed
   *
   * FILTERS:
   * Parameters - 'name', 'status', 'nationality', 'agency__name', 'agency__abbrev', 'date_of_birth',
   *  'date_of_death', 'status_ids', 'is_human', 'type__id', 'has_flown', 'in_space'
   * Example - /2.2.0/astronaut/?nationality=American
   *
   * SEARCH EXAMPLE:
   * /2.2.0/astronaut/?search=armstrong
   * Searches through name, nationality and agency name
   *
   * ORDERING:
   * Fields - 'name', 'status', 'date_of_birth'
   * Example - /2.2.0/astronaut/?order=name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `astronautRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  astronautRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Astronaut.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AstronautDetailed>> {

    const rb = new RequestBuilder(this.rootUrl, AstronautService.AstronautRetrievePath, 'get');
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
        return r as StrictHttpResponse<AstronautDetailed>;
      })
    );
  }

  /**
   * API endpoint that allows Astronaut to be viewed.
   *
   * GET:
   * Return a list of all the existing astronauts.
   *
   * MODE:
   * Normal, List, LaunchList and Detailed
   * /2.2.0/astronaut/?mode=detailed
   *
   * FILTERS:
   * Parameters - 'name', 'status', 'nationality', 'agency__name', 'agency__abbrev', 'date_of_birth',
   *  'date_of_death', 'status_ids', 'is_human', 'type__id', 'has_flown', 'in_space'
   * Example - /2.2.0/astronaut/?nationality=American
   *
   * SEARCH EXAMPLE:
   * /2.2.0/astronaut/?search=armstrong
   * Searches through name, nationality and agency name
   *
   * ORDERING:
   * Fields - 'name', 'status', 'date_of_birth'
   * Example - /2.2.0/astronaut/?order=name
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `astronautRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  astronautRetrieve(params: {

    /**
     * A unique integer value identifying this Astronaut.
     */
    id: number;
    context?: HttpContext
  }
): Observable<AstronautDetailed> {

    return this.astronautRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<AstronautDetailed>) => r.body as AstronautDetailed)
    );
  }

}
