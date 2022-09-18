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

import { AgencySerializerDetailed } from '../dto/agency-serializer-detailed';
import { PaginatedAgencyList } from '../dto/paginated-agency-list';

@Injectable({
  providedIn: 'root',
})
export class AgenciesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation agenciesList
   */
  static readonly AgenciesListPath = '/2.2.0/agencies/';

  /**
   * API endpoint that allows Agencies to be viewed.
   *
   * GET:
   * Return a list of all the existing users.
   *
   * MODE:
   * Normal and Detailed
   * /2.2.0/agencies/?mode=detailed
   *
   * FILTERS:
   * Parameters - 'featured', 'agency_type', 'country_code'
   * Example - /2.2.0/agencies/?featured=true
   *
   * SEARCH EXAMPLE:
   * /2.2.0/agencies/?search=nasa
   *
   * ORDERING:
   * Fields - 'id', 'name', 'featured'
   * Example - /2.2.0/agencies/?ordering=featured
   *
   * The 'country_code' field is a string of comma separated ISO 3166 alpha-3 codes.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agenciesList()` instead.
   *
   * This method doesn't expect any request body.
   */
  agenciesList$Response(params?: {
    abbrev?: string;
    abbrev__contains?: string;
    administrator?: string;
    administrator__contains?: string;
    agency_type?: number;
    attempted_landings?: number;
    attempted_landings__gt?: number;
    attempted_landings__gte?: number;
    attempted_landings__lt?: number;
    attempted_landings__lte?: number;
    consecutive_successful_landings?: number;
    consecutive_successful_landings__gt?: number;
    consecutive_successful_landings__gte?: number;
    consecutive_successful_landings__lt?: number;
    consecutive_successful_landings__lte?: number;
    consecutive_successful_launches?: number;
    consecutive_successful_launches__gt?: number;
    consecutive_successful_launches__gte?: number;
    consecutive_successful_launches__lt?: number;
    consecutive_successful_launches__lte?: number;
    description?: string;
    description__contains?: string;
    failed_landings?: number;
    failed_landings__gt?: number;
    failed_landings__gte?: number;
    failed_landings__lt?: number;
    failed_landings__lte?: number;
    failed_launches?: number;
    failed_launches__gt?: number;
    failed_launches__gte?: number;
    failed_launches__lt?: number;
    failed_launches__lte?: number;
    featured?: boolean;
    founding_year?: string;
    founding_year__contains?: string;
    id?: number;
    id__gt?: number;
    id__gte?: number;
    id__lt?: number;
    id__lte?: number;

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
     * Which field to use when ordering the results.
     */
    ordering?: string;
    parent?: number;
    pending_launches?: number;
    pending_launches__gt?: number;
    pending_launches__gte?: number;
    pending_launches__lt?: number;
    pending_launches__lte?: number;

    /**
     * A search term.
     */
    search?: string;
    successful_landings?: number;
    successful_landings__gt?: number;
    successful_landings__gte?: number;
    successful_landings__lt?: number;
    successful_landings__lte?: number;
    successful_launches?: number;
    successful_launches__gt?: number;
    successful_launches__gte?: number;
    successful_launches__lt?: number;
    successful_launches__lte?: number;
    total_launch_count?: number;
    total_launch_count__gt?: number;
    total_launch_count__gte?: number;
    total_launch_count__lt?: number;
    total_launch_count__lte?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedAgencyList>> {

    const rb = new RequestBuilder(this.rootUrl, AgenciesService.AgenciesListPath, 'get');
    if (params) {
      rb.query('abbrev', params.abbrev, {});
      rb.query('abbrev__contains', params.abbrev__contains, {});
      rb.query('administrator', params.administrator, {});
      rb.query('administrator__contains', params.administrator__contains, {});
      rb.query('agency_type', params.agency_type, {});
      rb.query('attempted_landings', params.attempted_landings, {});
      rb.query('attempted_landings__gt', params.attempted_landings__gt, {});
      rb.query('attempted_landings__gte', params.attempted_landings__gte, {});
      rb.query('attempted_landings__lt', params.attempted_landings__lt, {});
      rb.query('attempted_landings__lte', params.attempted_landings__lte, {});
      rb.query('consecutive_successful_landings', params.consecutive_successful_landings, {});
      rb.query('consecutive_successful_landings__gt', params.consecutive_successful_landings__gt, {});
      rb.query('consecutive_successful_landings__gte', params.consecutive_successful_landings__gte, {});
      rb.query('consecutive_successful_landings__lt', params.consecutive_successful_landings__lt, {});
      rb.query('consecutive_successful_landings__lte', params.consecutive_successful_landings__lte, {});
      rb.query('consecutive_successful_launches', params.consecutive_successful_launches, {});
      rb.query('consecutive_successful_launches__gt', params.consecutive_successful_launches__gt, {});
      rb.query('consecutive_successful_launches__gte', params.consecutive_successful_launches__gte, {});
      rb.query('consecutive_successful_launches__lt', params.consecutive_successful_launches__lt, {});
      rb.query('consecutive_successful_launches__lte', params.consecutive_successful_launches__lte, {});
      rb.query('description', params.description, {});
      rb.query('description__contains', params.description__contains, {});
      rb.query('failed_landings', params.failed_landings, {});
      rb.query('failed_landings__gt', params.failed_landings__gt, {});
      rb.query('failed_landings__gte', params.failed_landings__gte, {});
      rb.query('failed_landings__lt', params.failed_landings__lt, {});
      rb.query('failed_landings__lte', params.failed_landings__lte, {});
      rb.query('failed_launches', params.failed_launches, {});
      rb.query('failed_launches__gt', params.failed_launches__gt, {});
      rb.query('failed_launches__gte', params.failed_launches__gte, {});
      rb.query('failed_launches__lt', params.failed_launches__lt, {});
      rb.query('failed_launches__lte', params.failed_launches__lte, {});
      rb.query('featured', params.featured, {});
      rb.query('founding_year', params.founding_year, {});
      rb.query('founding_year__contains', params.founding_year__contains, {});
      rb.query('id', params.id, {});
      rb.query('id__gt', params.id__gt, {});
      rb.query('id__gte', params.id__gte, {});
      rb.query('id__lt', params.id__lt, {});
      rb.query('id__lte', params.id__lte, {});
      rb.query('limit', params.limit, {});
      rb.query('name', params.name, {});
      rb.query('name__contains', params.name__contains, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('parent', params.parent, {});
      rb.query('pending_launches', params.pending_launches, {});
      rb.query('pending_launches__gt', params.pending_launches__gt, {});
      rb.query('pending_launches__gte', params.pending_launches__gte, {});
      rb.query('pending_launches__lt', params.pending_launches__lt, {});
      rb.query('pending_launches__lte', params.pending_launches__lte, {});
      rb.query('search', params.search, {});
      rb.query('successful_landings', params.successful_landings, {});
      rb.query('successful_landings__gt', params.successful_landings__gt, {});
      rb.query('successful_landings__gte', params.successful_landings__gte, {});
      rb.query('successful_landings__lt', params.successful_landings__lt, {});
      rb.query('successful_landings__lte', params.successful_landings__lte, {});
      rb.query('successful_launches', params.successful_launches, {});
      rb.query('successful_launches__gt', params.successful_launches__gt, {});
      rb.query('successful_launches__gte', params.successful_launches__gte, {});
      rb.query('successful_launches__lt', params.successful_launches__lt, {});
      rb.query('successful_launches__lte', params.successful_launches__lte, {});
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
        return r as StrictHttpResponse<PaginatedAgencyList>;
      })
    );
  }

  /**
   * API endpoint that allows Agencies to be viewed.
   *
   * GET:
   * Return a list of all the existing users.
   *
   * MODE:
   * Normal and Detailed
   * /2.2.0/agencies/?mode=detailed
   *
   * FILTERS:
   * Parameters - 'featured', 'agency_type', 'country_code'
   * Example - /2.2.0/agencies/?featured=true
   *
   * SEARCH EXAMPLE:
   * /2.2.0/agencies/?search=nasa
   *
   * ORDERING:
   * Fields - 'id', 'name', 'featured'
   * Example - /2.2.0/agencies/?ordering=featured
   *
   * The 'country_code' field is a string of comma separated ISO 3166 alpha-3 codes.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agenciesList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agenciesList(params?: {
    abbrev?: string;
    abbrev__contains?: string;
    administrator?: string;
    administrator__contains?: string;
    agency_type?: number;
    attempted_landings?: number;
    attempted_landings__gt?: number;
    attempted_landings__gte?: number;
    attempted_landings__lt?: number;
    attempted_landings__lte?: number;
    consecutive_successful_landings?: number;
    consecutive_successful_landings__gt?: number;
    consecutive_successful_landings__gte?: number;
    consecutive_successful_landings__lt?: number;
    consecutive_successful_landings__lte?: number;
    consecutive_successful_launches?: number;
    consecutive_successful_launches__gt?: number;
    consecutive_successful_launches__gte?: number;
    consecutive_successful_launches__lt?: number;
    consecutive_successful_launches__lte?: number;
    description?: string;
    description__contains?: string;
    failed_landings?: number;
    failed_landings__gt?: number;
    failed_landings__gte?: number;
    failed_landings__lt?: number;
    failed_landings__lte?: number;
    failed_launches?: number;
    failed_launches__gt?: number;
    failed_launches__gte?: number;
    failed_launches__lt?: number;
    failed_launches__lte?: number;
    featured?: boolean;
    founding_year?: string;
    founding_year__contains?: string;
    id?: number;
    id__gt?: number;
    id__gte?: number;
    id__lt?: number;
    id__lte?: number;

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
     * Which field to use when ordering the results.
     */
    ordering?: string;
    parent?: number;
    pending_launches?: number;
    pending_launches__gt?: number;
    pending_launches__gte?: number;
    pending_launches__lt?: number;
    pending_launches__lte?: number;

    /**
     * A search term.
     */
    search?: string;
    successful_landings?: number;
    successful_landings__gt?: number;
    successful_landings__gte?: number;
    successful_landings__lt?: number;
    successful_landings__lte?: number;
    successful_launches?: number;
    successful_launches__gt?: number;
    successful_launches__gte?: number;
    successful_launches__lt?: number;
    successful_launches__lte?: number;
    total_launch_count?: number;
    total_launch_count__gt?: number;
    total_launch_count__gte?: number;
    total_launch_count__lt?: number;
    total_launch_count__lte?: number;
    context?: HttpContext
  }
): Observable<PaginatedAgencyList> {

    return this.agenciesList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedAgencyList>) => r.body as PaginatedAgencyList)
    );
  }

  /**
   * Path part for operation agenciesRetrieve
   */
  static readonly AgenciesRetrievePath = '/2.2.0/agencies/{id}/';

  /**
   * API endpoint that allows Agencies to be viewed.
   *
   * GET:
   * Return a list of all the existing users.
   *
   * MODE:
   * Normal and Detailed
   * /2.2.0/agencies/?mode=detailed
   *
   * FILTERS:
   * Parameters - 'featured', 'agency_type', 'country_code'
   * Example - /2.2.0/agencies/?featured=true
   *
   * SEARCH EXAMPLE:
   * /2.2.0/agencies/?search=nasa
   *
   * ORDERING:
   * Fields - 'id', 'name', 'featured'
   * Example - /2.2.0/agencies/?ordering=featured
   *
   * The 'country_code' field is a string of comma separated ISO 3166 alpha-3 codes.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `agenciesRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  agenciesRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Agency.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AgencySerializerDetailed>> {

    const rb = new RequestBuilder(this.rootUrl, AgenciesService.AgenciesRetrievePath, 'get');
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
        return r as StrictHttpResponse<AgencySerializerDetailed>;
      })
    );
  }

  /**
   * API endpoint that allows Agencies to be viewed.
   *
   * GET:
   * Return a list of all the existing users.
   *
   * MODE:
   * Normal and Detailed
   * /2.2.0/agencies/?mode=detailed
   *
   * FILTERS:
   * Parameters - 'featured', 'agency_type', 'country_code'
   * Example - /2.2.0/agencies/?featured=true
   *
   * SEARCH EXAMPLE:
   * /2.2.0/agencies/?search=nasa
   *
   * ORDERING:
   * Fields - 'id', 'name', 'featured'
   * Example - /2.2.0/agencies/?ordering=featured
   *
   * The 'country_code' field is a string of comma separated ISO 3166 alpha-3 codes.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `agenciesRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  agenciesRetrieve(params: {

    /**
     * A unique integer value identifying this Agency.
     */
    id: number;
    context?: HttpContext
  }
): Observable<AgencySerializerDetailed> {

    return this.agenciesRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<AgencySerializerDetailed>) => r.body as AgencySerializerDetailed)
    );
  }

}
