/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

import { LaunchDetailed } from '../dto/launch-detailed';
import { PaginatedLaunchSerializerCommonList } from '../dto/paginated-launch-serializer-common-list';
import { BaseService } from 'src/base-service';
import { ApiConfiguration } from 'src/api-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { StrictHttpResponse } from 'src/strict-http-response';
import { RequestBuilder } from 'src/request-builder';

@Injectable({
  providedIn: 'root',
})
export class LaunchService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation launchList
   */
  static readonly LaunchListPath = '/2.2.0/launch/';

  /**
   * API endpoint that returns all Launch objects or a single launch.
   *
   * EXAMPLE - /launch/\<id\>/ or /launch/?mode=list&search=SpaceX
   *
   * GET
   * Return a list of all Launch objects.
   *
   * FILTERS
   * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
   *  'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
   *  'related', 'location__ids', 'lsp__ids', 'pad__ids', 'status__ids'
   *
   * MODE
   * 'normal', 'list', 'detailed'
   *
   * EXAMPLE ?mode=list
   *
   * SEARCH
   * Searches through the launch name, rocket name, launch agency, mission name & spacecraft name.
   *
   * EXAMPLE - ?search=SpaceX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `launchList()` instead.
   *
   * This method doesn't expect any request body.
   */
  launchList$Response(params?: {
    agency_launch_attempt_count?: number;
    agency_launch_attempt_count__gt?: number;
    agency_launch_attempt_count__gte?: number;
    agency_launch_attempt_count__lt?: number;
    agency_launch_attempt_count__lte?: number;
    agency_launch_attempt_count_year?: number;
    agency_launch_attempt_count_year__gt?: number;
    agency_launch_attempt_count_year__gte?: number;
    agency_launch_attempt_count_year__lt?: number;
    agency_launch_attempt_count_year__lte?: number;

    /**
     * Last Update is greater than or equal to
     */
    last_updated__gte?: string;

    /**
     * Last Update is less than or equal to
     */
    last_updated__lte?: string;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    location_launch_attempt_count?: number;
    location_launch_attempt_count__gt?: number;
    location_launch_attempt_count__gte?: number;
    location_launch_attempt_count__lt?: number;
    location_launch_attempt_count__lte?: number;
    location_launch_attempt_count_year?: number;
    location_launch_attempt_count_year__gt?: number;
    location_launch_attempt_count_year__gte?: number;
    location_launch_attempt_count_year__lt?: number;
    location_launch_attempt_count_year__lte?: number;
    mission__orbit__name?: string;
    mission__orbit__name__icontains?: string;
    name?: string;

    /**
     * NET is greater than
     */
    net__gt?: string;

    /**
     * NET is greater than or equal to
     */
    net__gte?: string;

    /**
     * NET is less than
     */
    net__lt?: string;

    /**
     * NET is less than or equal to
     */
    net__lte?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    orbital_launch_attempt_count?: number;
    orbital_launch_attempt_count__gt?: number;
    orbital_launch_attempt_count__gte?: number;
    orbital_launch_attempt_count__lt?: number;
    orbital_launch_attempt_count__lte?: number;
    orbital_launch_attempt_count_year?: number;
    orbital_launch_attempt_count_year__gt?: number;
    orbital_launch_attempt_count_year__gte?: number;
    orbital_launch_attempt_count_year__lt?: number;
    orbital_launch_attempt_count_year__lte?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    pad?: number;
    pad__location?: number;
    pad_launch_attempt_count?: number;
    pad_launch_attempt_count__gt?: number;
    pad_launch_attempt_count__gte?: number;
    pad_launch_attempt_count__lt?: number;
    pad_launch_attempt_count__lte?: number;
    pad_launch_attempt_count_year?: number;
    pad_launch_attempt_count_year__gt?: number;
    pad_launch_attempt_count_year__gte?: number;
    pad_launch_attempt_count_year__lt?: number;
    pad_launch_attempt_count_year__lte?: number;
    r_spacex_api_id?: string;
    rocket__configuration__full_name?: string;
    rocket__configuration__full_name__icontains?: string;
    rocket__configuration__id?: number;
    rocket__configuration__manufacturer__name?: string;
    rocket__configuration__manufacturer__name__icontains?: string;
    rocket__configuration__name?: string;
    rocket__spacecraftflight__spacecraft__id?: number;
    rocket__spacecraftflight__spacecraft__name?: string;
    rocket__spacecraftflight__spacecraft__name__icontains?: string;

    /**
     * A search term.
     */
    search?: string;
    slug?: string;
    status?: number;

    /**
     * Window End is greater than
     */
    window_end__gt?: string;

    /**
     * Window End is greater than or equal to
     */
    window_end__gte?: string;

    /**
     * Window End is less than
     */
    window_end__lt?: string;

    /**
     * Window End is less than or equal to
     */
    window_end__lte?: string;

    /**
     * Window Start is greater than
     */
    window_start__gt?: string;

    /**
     * Window Start is greater than or equal to
     */
    window_start__gte?: string;

    /**
     * Window Start is less than
     */
    window_start__lt?: string;

    /**
     * Window Start is less than or equal to
     */
    window_start__lte?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedLaunchSerializerCommonList>> {

    const rb = new RequestBuilder(this.rootUrl, LaunchService.LaunchListPath, 'get');
    if (params) {
      rb.query('agency_launch_attempt_count', params.agency_launch_attempt_count, {});
      rb.query('agency_launch_attempt_count__gt', params.agency_launch_attempt_count__gt, {});
      rb.query('agency_launch_attempt_count__gte', params.agency_launch_attempt_count__gte, {});
      rb.query('agency_launch_attempt_count__lt', params.agency_launch_attempt_count__lt, {});
      rb.query('agency_launch_attempt_count__lte', params.agency_launch_attempt_count__lte, {});
      rb.query('agency_launch_attempt_count_year', params.agency_launch_attempt_count_year, {});
      rb.query('agency_launch_attempt_count_year__gt', params.agency_launch_attempt_count_year__gt, {});
      rb.query('agency_launch_attempt_count_year__gte', params.agency_launch_attempt_count_year__gte, {});
      rb.query('agency_launch_attempt_count_year__lt', params.agency_launch_attempt_count_year__lt, {});
      rb.query('agency_launch_attempt_count_year__lte', params.agency_launch_attempt_count_year__lte, {});
      rb.query('last_updated__gte', params.last_updated__gte, {});
      rb.query('last_updated__lte', params.last_updated__lte, {});
      rb.query('limit', params.limit, {});
      rb.query('location_launch_attempt_count', params.location_launch_attempt_count, {});
      rb.query('location_launch_attempt_count__gt', params.location_launch_attempt_count__gt, {});
      rb.query('location_launch_attempt_count__gte', params.location_launch_attempt_count__gte, {});
      rb.query('location_launch_attempt_count__lt', params.location_launch_attempt_count__lt, {});
      rb.query('location_launch_attempt_count__lte', params.location_launch_attempt_count__lte, {});
      rb.query('location_launch_attempt_count_year', params.location_launch_attempt_count_year, {});
      rb.query('location_launch_attempt_count_year__gt', params.location_launch_attempt_count_year__gt, {});
      rb.query('location_launch_attempt_count_year__gte', params.location_launch_attempt_count_year__gte, {});
      rb.query('location_launch_attempt_count_year__lt', params.location_launch_attempt_count_year__lt, {});
      rb.query('location_launch_attempt_count_year__lte', params.location_launch_attempt_count_year__lte, {});
      rb.query('mission__orbit__name', params.mission__orbit__name, {});
      rb.query('mission__orbit__name__icontains', params.mission__orbit__name__icontains, {});
      rb.query('name', params.name, {});
      rb.query('net__gt', params.net__gt, {});
      rb.query('net__gte', params.net__gte, {});
      rb.query('net__lt', params.net__lt, {});
      rb.query('net__lte', params.net__lte, {});
      rb.query('offset', params.offset, {});
      rb.query('orbital_launch_attempt_count', params.orbital_launch_attempt_count, {});
      rb.query('orbital_launch_attempt_count__gt', params.orbital_launch_attempt_count__gt, {});
      rb.query('orbital_launch_attempt_count__gte', params.orbital_launch_attempt_count__gte, {});
      rb.query('orbital_launch_attempt_count__lt', params.orbital_launch_attempt_count__lt, {});
      rb.query('orbital_launch_attempt_count__lte', params.orbital_launch_attempt_count__lte, {});
      rb.query('orbital_launch_attempt_count_year', params.orbital_launch_attempt_count_year, {});
      rb.query('orbital_launch_attempt_count_year__gt', params.orbital_launch_attempt_count_year__gt, {});
      rb.query('orbital_launch_attempt_count_year__gte', params.orbital_launch_attempt_count_year__gte, {});
      rb.query('orbital_launch_attempt_count_year__lt', params.orbital_launch_attempt_count_year__lt, {});
      rb.query('orbital_launch_attempt_count_year__lte', params.orbital_launch_attempt_count_year__lte, {});
      rb.query('ordering', params.ordering, {});
      rb.query('pad', params.pad, {});
      rb.query('pad__location', params.pad__location, {});
      rb.query('pad_launch_attempt_count', params.pad_launch_attempt_count, {});
      rb.query('pad_launch_attempt_count__gt', params.pad_launch_attempt_count__gt, {});
      rb.query('pad_launch_attempt_count__gte', params.pad_launch_attempt_count__gte, {});
      rb.query('pad_launch_attempt_count__lt', params.pad_launch_attempt_count__lt, {});
      rb.query('pad_launch_attempt_count__lte', params.pad_launch_attempt_count__lte, {});
      rb.query('pad_launch_attempt_count_year', params.pad_launch_attempt_count_year, {});
      rb.query('pad_launch_attempt_count_year__gt', params.pad_launch_attempt_count_year__gt, {});
      rb.query('pad_launch_attempt_count_year__gte', params.pad_launch_attempt_count_year__gte, {});
      rb.query('pad_launch_attempt_count_year__lt', params.pad_launch_attempt_count_year__lt, {});
      rb.query('pad_launch_attempt_count_year__lte', params.pad_launch_attempt_count_year__lte, {});
      rb.query('r_spacex_api_id', params.r_spacex_api_id, {});
      rb.query('rocket__configuration__full_name', params.rocket__configuration__full_name, {});
      rb.query('rocket__configuration__full_name__icontains', params.rocket__configuration__full_name__icontains, {});
      rb.query('rocket__configuration__id', params.rocket__configuration__id, {});
      rb.query('rocket__configuration__manufacturer__name', params.rocket__configuration__manufacturer__name, {});
      rb.query('rocket__configuration__manufacturer__name__icontains', params.rocket__configuration__manufacturer__name__icontains, {});
      rb.query('rocket__configuration__name', params.rocket__configuration__name, {});
      rb.query('rocket__spacecraftflight__spacecraft__id', params.rocket__spacecraftflight__spacecraft__id, {});
      rb.query('rocket__spacecraftflight__spacecraft__name', params.rocket__spacecraftflight__spacecraft__name, {});
      rb.query('rocket__spacecraftflight__spacecraft__name__icontains', params.rocket__spacecraftflight__spacecraft__name__icontains, {});
      rb.query('search', params.search, {});
      rb.query('slug', params.slug, {});
      rb.query('status', params.status, {});
      rb.query('window_end__gt', params.window_end__gt, {});
      rb.query('window_end__gte', params.window_end__gte, {});
      rb.query('window_end__lt', params.window_end__lt, {});
      rb.query('window_end__lte', params.window_end__lte, {});
      rb.query('window_start__gt', params.window_start__gt, {});
      rb.query('window_start__gte', params.window_start__gte, {});
      rb.query('window_start__lt', params.window_start__lt, {});
      rb.query('window_start__lte', params.window_start__lte, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedLaunchSerializerCommonList>;
      })
    );
  }

  /**
   * API endpoint that returns all Launch objects or a single launch.
   *
   * EXAMPLE - /launch/\<id\>/ or /launch/?mode=list&search=SpaceX
   *
   * GET
   * Return a list of all Launch objects.
   *
   * FILTERS
   * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
   *  'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
   *  'related', 'location__ids', 'lsp__ids', 'pad__ids', 'status__ids'
   *
   * MODE
   * 'normal', 'list', 'detailed'
   *
   * EXAMPLE ?mode=list
   *
   * SEARCH
   * Searches through the launch name, rocket name, launch agency, mission name & spacecraft name.
   *
   * EXAMPLE - ?search=SpaceX
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `launchList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  launchList(params?: {
    agency_launch_attempt_count?: number;
    agency_launch_attempt_count__gt?: number;
    agency_launch_attempt_count__gte?: number;
    agency_launch_attempt_count__lt?: number;
    agency_launch_attempt_count__lte?: number;
    agency_launch_attempt_count_year?: number;
    agency_launch_attempt_count_year__gt?: number;
    agency_launch_attempt_count_year__gte?: number;
    agency_launch_attempt_count_year__lt?: number;
    agency_launch_attempt_count_year__lte?: number;

    /**
     * Last Update is greater than or equal to
     */
    last_updated__gte?: string;

    /**
     * Last Update is less than or equal to
     */
    last_updated__lte?: string;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    location_launch_attempt_count?: number;
    location_launch_attempt_count__gt?: number;
    location_launch_attempt_count__gte?: number;
    location_launch_attempt_count__lt?: number;
    location_launch_attempt_count__lte?: number;
    location_launch_attempt_count_year?: number;
    location_launch_attempt_count_year__gt?: number;
    location_launch_attempt_count_year__gte?: number;
    location_launch_attempt_count_year__lt?: number;
    location_launch_attempt_count_year__lte?: number;
    mission__orbit__name?: string;
    mission__orbit__name__icontains?: string;
    name?: string;

    /**
     * NET is greater than
     */
    net__gt?: string;

    /**
     * NET is greater than or equal to
     */
    net__gte?: string;

    /**
     * NET is less than
     */
    net__lt?: string;

    /**
     * NET is less than or equal to
     */
    net__lte?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    orbital_launch_attempt_count?: number;
    orbital_launch_attempt_count__gt?: number;
    orbital_launch_attempt_count__gte?: number;
    orbital_launch_attempt_count__lt?: number;
    orbital_launch_attempt_count__lte?: number;
    orbital_launch_attempt_count_year?: number;
    orbital_launch_attempt_count_year__gt?: number;
    orbital_launch_attempt_count_year__gte?: number;
    orbital_launch_attempt_count_year__lt?: number;
    orbital_launch_attempt_count_year__lte?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    pad?: number;
    pad__location?: number;
    pad_launch_attempt_count?: number;
    pad_launch_attempt_count__gt?: number;
    pad_launch_attempt_count__gte?: number;
    pad_launch_attempt_count__lt?: number;
    pad_launch_attempt_count__lte?: number;
    pad_launch_attempt_count_year?: number;
    pad_launch_attempt_count_year__gt?: number;
    pad_launch_attempt_count_year__gte?: number;
    pad_launch_attempt_count_year__lt?: number;
    pad_launch_attempt_count_year__lte?: number;
    r_spacex_api_id?: string;
    rocket__configuration__full_name?: string;
    rocket__configuration__full_name__icontains?: string;
    rocket__configuration__id?: number;
    rocket__configuration__manufacturer__name?: string;
    rocket__configuration__manufacturer__name__icontains?: string;
    rocket__configuration__name?: string;
    rocket__spacecraftflight__spacecraft__id?: number;
    rocket__spacecraftflight__spacecraft__name?: string;
    rocket__spacecraftflight__spacecraft__name__icontains?: string;

    /**
     * A search term.
     */
    search?: string;
    slug?: string;
    status?: number;

    /**
     * Window End is greater than
     */
    window_end__gt?: string;

    /**
     * Window End is greater than or equal to
     */
    window_end__gte?: string;

    /**
     * Window End is less than
     */
    window_end__lt?: string;

    /**
     * Window End is less than or equal to
     */
    window_end__lte?: string;

    /**
     * Window Start is greater than
     */
    window_start__gt?: string;

    /**
     * Window Start is greater than or equal to
     */
    window_start__gte?: string;

    /**
     * Window Start is less than
     */
    window_start__lt?: string;

    /**
     * Window Start is less than or equal to
     */
    window_start__lte?: string;
    context?: HttpContext
  }
): Observable<PaginatedLaunchSerializerCommonList> {

    return this.launchList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedLaunchSerializerCommonList>) => r.body as PaginatedLaunchSerializerCommonList)
    );
  }

  /**
   * Path part for operation launchRetrieve
   */
  static readonly LaunchRetrievePath = '/2.2.0/launch/{id}/';

  /**
   * API endpoint that returns all Launch objects or a single launch.
   *
   * EXAMPLE - /launch/\<id\>/ or /launch/?mode=list&search=SpaceX
   *
   * GET
   * Return a list of all Launch objects.
   *
   * FILTERS
   * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
   *  'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
   *  'related', 'location__ids', 'lsp__ids', 'pad__ids', 'status__ids'
   *
   * MODE
   * 'normal', 'list', 'detailed'
   *
   * EXAMPLE ?mode=list
   *
   * SEARCH
   * Searches through the launch name, rocket name, launch agency, mission name & spacecraft name.
   *
   * EXAMPLE - ?search=SpaceX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `launchRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  launchRetrieve$Response(params: {

    /**
     * A UUID string identifying this Launch.
     */
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LaunchDetailed>> {

    const rb = new RequestBuilder(this.rootUrl, LaunchService.LaunchRetrievePath, 'get');
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
        return r as StrictHttpResponse<LaunchDetailed>;
      })
    );
  }

  /**
   * API endpoint that returns all Launch objects or a single launch.
   *
   * EXAMPLE - /launch/\<id\>/ or /launch/?mode=list&search=SpaceX
   *
   * GET
   * Return a list of all Launch objects.
   *
   * FILTERS
   * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
   *  'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
   *  'related', 'location__ids', 'lsp__ids', 'pad__ids', 'status__ids'
   *
   * MODE
   * 'normal', 'list', 'detailed'
   *
   * EXAMPLE ?mode=list
   *
   * SEARCH
   * Searches through the launch name, rocket name, launch agency, mission name & spacecraft name.
   *
   * EXAMPLE - ?search=SpaceX
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `launchRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  launchRetrieve(params: {

    /**
     * A UUID string identifying this Launch.
     */
    id: string;
    context?: HttpContext
  }
): Observable<LaunchDetailed> {

    return this.launchRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<LaunchDetailed>) => r.body as LaunchDetailed)
    );
  }

  /**
   * Path part for operation launchPreviousList
   */
  static readonly LaunchPreviousListPath = '/2.2.0/launch/previous/';

  /**
   * API endpoint that returns previous Launch objects.
   *
   * GET
   * Return a list of previous Launches
   *
   * FILTERS
   * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
   *  'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
   *  'related', 'location__ids', 'lsp__ids', 'pad__ids', 'status__ids'
   *
   * MODE
   * 'normal', 'list', 'detailed'
   * EXAMPLE ?mode=list
   *
   * SEARCH
   * Searches through the launch name, rocket name, launch agency and mission name.
   * EXAMPLE - ?search=SpaceX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `launchPreviousList()` instead.
   *
   * This method doesn't expect any request body.
   */
  launchPreviousList$Response(params?: {
    agency_launch_attempt_count?: number;
    agency_launch_attempt_count__gt?: number;
    agency_launch_attempt_count__gte?: number;
    agency_launch_attempt_count__lt?: number;
    agency_launch_attempt_count__lte?: number;
    agency_launch_attempt_count_year?: number;
    agency_launch_attempt_count_year__gt?: number;
    agency_launch_attempt_count_year__gte?: number;
    agency_launch_attempt_count_year__lt?: number;
    agency_launch_attempt_count_year__lte?: number;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    location_launch_attempt_count?: number;
    location_launch_attempt_count__gt?: number;
    location_launch_attempt_count__gte?: number;
    location_launch_attempt_count__lt?: number;
    location_launch_attempt_count__lte?: number;
    location_launch_attempt_count_year?: number;
    location_launch_attempt_count_year__gt?: number;
    location_launch_attempt_count_year__gte?: number;
    location_launch_attempt_count_year__lt?: number;
    location_launch_attempt_count_year__lte?: number;
    mission__orbit__name?: string;
    mission__orbit__name__icontains?: string;
    name?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    orbital_launch_attempt_count?: number;
    orbital_launch_attempt_count__gt?: number;
    orbital_launch_attempt_count__gte?: number;
    orbital_launch_attempt_count__lt?: number;
    orbital_launch_attempt_count__lte?: number;
    orbital_launch_attempt_count_year?: number;
    orbital_launch_attempt_count_year__gt?: number;
    orbital_launch_attempt_count_year__gte?: number;
    orbital_launch_attempt_count_year__lt?: number;
    orbital_launch_attempt_count_year__lte?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    pad_launch_attempt_count?: number;
    pad_launch_attempt_count__gt?: number;
    pad_launch_attempt_count__gte?: number;
    pad_launch_attempt_count__lt?: number;
    pad_launch_attempt_count__lte?: number;
    pad_launch_attempt_count_year?: number;
    pad_launch_attempt_count_year__gt?: number;
    pad_launch_attempt_count_year__gte?: number;
    pad_launch_attempt_count_year__lt?: number;
    pad_launch_attempt_count_year__lte?: number;
    program?: Array<number>;
    r_spacex_api_id?: string;
    rocket__configuration__full_name?: string;
    rocket__configuration__full_name__icontains?: string;
    rocket__configuration__id?: number;
    rocket__configuration__manufacturer__name?: string;
    rocket__configuration__manufacturer__name__icontains?: string;
    rocket__configuration__name?: string;
    rocket__spacecraftflight__spacecraft__id?: number;
    rocket__spacecraftflight__spacecraft__name?: string;
    rocket__spacecraftflight__spacecraft__name__icontains?: string;

    /**
     * A search term.
     */
    search?: string;
    slug?: string;
    status?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedLaunchSerializerCommonList>> {

    const rb = new RequestBuilder(this.rootUrl, LaunchService.LaunchPreviousListPath, 'get');
    if (params) {
      rb.query('agency_launch_attempt_count', params.agency_launch_attempt_count, {});
      rb.query('agency_launch_attempt_count__gt', params.agency_launch_attempt_count__gt, {});
      rb.query('agency_launch_attempt_count__gte', params.agency_launch_attempt_count__gte, {});
      rb.query('agency_launch_attempt_count__lt', params.agency_launch_attempt_count__lt, {});
      rb.query('agency_launch_attempt_count__lte', params.agency_launch_attempt_count__lte, {});
      rb.query('agency_launch_attempt_count_year', params.agency_launch_attempt_count_year, {});
      rb.query('agency_launch_attempt_count_year__gt', params.agency_launch_attempt_count_year__gt, {});
      rb.query('agency_launch_attempt_count_year__gte', params.agency_launch_attempt_count_year__gte, {});
      rb.query('agency_launch_attempt_count_year__lt', params.agency_launch_attempt_count_year__lt, {});
      rb.query('agency_launch_attempt_count_year__lte', params.agency_launch_attempt_count_year__lte, {});
      rb.query('limit', params.limit, {});
      rb.query('location_launch_attempt_count', params.location_launch_attempt_count, {});
      rb.query('location_launch_attempt_count__gt', params.location_launch_attempt_count__gt, {});
      rb.query('location_launch_attempt_count__gte', params.location_launch_attempt_count__gte, {});
      rb.query('location_launch_attempt_count__lt', params.location_launch_attempt_count__lt, {});
      rb.query('location_launch_attempt_count__lte', params.location_launch_attempt_count__lte, {});
      rb.query('location_launch_attempt_count_year', params.location_launch_attempt_count_year, {});
      rb.query('location_launch_attempt_count_year__gt', params.location_launch_attempt_count_year__gt, {});
      rb.query('location_launch_attempt_count_year__gte', params.location_launch_attempt_count_year__gte, {});
      rb.query('location_launch_attempt_count_year__lt', params.location_launch_attempt_count_year__lt, {});
      rb.query('location_launch_attempt_count_year__lte', params.location_launch_attempt_count_year__lte, {});
      rb.query('mission__orbit__name', params.mission__orbit__name, {});
      rb.query('mission__orbit__name__icontains', params.mission__orbit__name__icontains, {});
      rb.query('name', params.name, {});
      rb.query('offset', params.offset, {});
      rb.query('orbital_launch_attempt_count', params.orbital_launch_attempt_count, {});
      rb.query('orbital_launch_attempt_count__gt', params.orbital_launch_attempt_count__gt, {});
      rb.query('orbital_launch_attempt_count__gte', params.orbital_launch_attempt_count__gte, {});
      rb.query('orbital_launch_attempt_count__lt', params.orbital_launch_attempt_count__lt, {});
      rb.query('orbital_launch_attempt_count__lte', params.orbital_launch_attempt_count__lte, {});
      rb.query('orbital_launch_attempt_count_year', params.orbital_launch_attempt_count_year, {});
      rb.query('orbital_launch_attempt_count_year__gt', params.orbital_launch_attempt_count_year__gt, {});
      rb.query('orbital_launch_attempt_count_year__gte', params.orbital_launch_attempt_count_year__gte, {});
      rb.query('orbital_launch_attempt_count_year__lt', params.orbital_launch_attempt_count_year__lt, {});
      rb.query('orbital_launch_attempt_count_year__lte', params.orbital_launch_attempt_count_year__lte, {});
      rb.query('ordering', params.ordering, {});
      rb.query('pad_launch_attempt_count', params.pad_launch_attempt_count, {});
      rb.query('pad_launch_attempt_count__gt', params.pad_launch_attempt_count__gt, {});
      rb.query('pad_launch_attempt_count__gte', params.pad_launch_attempt_count__gte, {});
      rb.query('pad_launch_attempt_count__lt', params.pad_launch_attempt_count__lt, {});
      rb.query('pad_launch_attempt_count__lte', params.pad_launch_attempt_count__lte, {});
      rb.query('pad_launch_attempt_count_year', params.pad_launch_attempt_count_year, {});
      rb.query('pad_launch_attempt_count_year__gt', params.pad_launch_attempt_count_year__gt, {});
      rb.query('pad_launch_attempt_count_year__gte', params.pad_launch_attempt_count_year__gte, {});
      rb.query('pad_launch_attempt_count_year__lt', params.pad_launch_attempt_count_year__lt, {});
      rb.query('pad_launch_attempt_count_year__lte', params.pad_launch_attempt_count_year__lte, {});
      rb.query('program', params.program, {"style":"form","explode":true});
      rb.query('r_spacex_api_id', params.r_spacex_api_id, {});
      rb.query('rocket__configuration__full_name', params.rocket__configuration__full_name, {});
      rb.query('rocket__configuration__full_name__icontains', params.rocket__configuration__full_name__icontains, {});
      rb.query('rocket__configuration__id', params.rocket__configuration__id, {});
      rb.query('rocket__configuration__manufacturer__name', params.rocket__configuration__manufacturer__name, {});
      rb.query('rocket__configuration__manufacturer__name__icontains', params.rocket__configuration__manufacturer__name__icontains, {});
      rb.query('rocket__configuration__name', params.rocket__configuration__name, {});
      rb.query('rocket__spacecraftflight__spacecraft__id', params.rocket__spacecraftflight__spacecraft__id, {});
      rb.query('rocket__spacecraftflight__spacecraft__name', params.rocket__spacecraftflight__spacecraft__name, {});
      rb.query('rocket__spacecraftflight__spacecraft__name__icontains', params.rocket__spacecraftflight__spacecraft__name__icontains, {});
      rb.query('search', params.search, {});
      rb.query('slug', params.slug, {});
      rb.query('status', params.status, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedLaunchSerializerCommonList>;
      })
    );
  }

  /**
   * API endpoint that returns previous Launch objects.
   *
   * GET
   * Return a list of previous Launches
   *
   * FILTERS
   * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
   *  'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
   *  'related', 'location__ids', 'lsp__ids', 'pad__ids', 'status__ids'
   *
   * MODE
   * 'normal', 'list', 'detailed'
   * EXAMPLE ?mode=list
   *
   * SEARCH
   * Searches through the launch name, rocket name, launch agency and mission name.
   * EXAMPLE - ?search=SpaceX
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `launchPreviousList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  launchPreviousList(params?: {
    agency_launch_attempt_count?: number;
    agency_launch_attempt_count__gt?: number;
    agency_launch_attempt_count__gte?: number;
    agency_launch_attempt_count__lt?: number;
    agency_launch_attempt_count__lte?: number;
    agency_launch_attempt_count_year?: number;
    agency_launch_attempt_count_year__gt?: number;
    agency_launch_attempt_count_year__gte?: number;
    agency_launch_attempt_count_year__lt?: number;
    agency_launch_attempt_count_year__lte?: number;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    location_launch_attempt_count?: number;
    location_launch_attempt_count__gt?: number;
    location_launch_attempt_count__gte?: number;
    location_launch_attempt_count__lt?: number;
    location_launch_attempt_count__lte?: number;
    location_launch_attempt_count_year?: number;
    location_launch_attempt_count_year__gt?: number;
    location_launch_attempt_count_year__gte?: number;
    location_launch_attempt_count_year__lt?: number;
    location_launch_attempt_count_year__lte?: number;
    mission__orbit__name?: string;
    mission__orbit__name__icontains?: string;
    name?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    orbital_launch_attempt_count?: number;
    orbital_launch_attempt_count__gt?: number;
    orbital_launch_attempt_count__gte?: number;
    orbital_launch_attempt_count__lt?: number;
    orbital_launch_attempt_count__lte?: number;
    orbital_launch_attempt_count_year?: number;
    orbital_launch_attempt_count_year__gt?: number;
    orbital_launch_attempt_count_year__gte?: number;
    orbital_launch_attempt_count_year__lt?: number;
    orbital_launch_attempt_count_year__lte?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    pad_launch_attempt_count?: number;
    pad_launch_attempt_count__gt?: number;
    pad_launch_attempt_count__gte?: number;
    pad_launch_attempt_count__lt?: number;
    pad_launch_attempt_count__lte?: number;
    pad_launch_attempt_count_year?: number;
    pad_launch_attempt_count_year__gt?: number;
    pad_launch_attempt_count_year__gte?: number;
    pad_launch_attempt_count_year__lt?: number;
    pad_launch_attempt_count_year__lte?: number;
    program?: Array<number>;
    r_spacex_api_id?: string;
    rocket__configuration__full_name?: string;
    rocket__configuration__full_name__icontains?: string;
    rocket__configuration__id?: number;
    rocket__configuration__manufacturer__name?: string;
    rocket__configuration__manufacturer__name__icontains?: string;
    rocket__configuration__name?: string;
    rocket__spacecraftflight__spacecraft__id?: number;
    rocket__spacecraftflight__spacecraft__name?: string;
    rocket__spacecraftflight__spacecraft__name__icontains?: string;

    /**
     * A search term.
     */
    search?: string;
    slug?: string;
    status?: number;
    context?: HttpContext
  }
): Observable<PaginatedLaunchSerializerCommonList> {

    return this.launchPreviousList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedLaunchSerializerCommonList>) => r.body as PaginatedLaunchSerializerCommonList)
    );
  }

  /**
   * Path part for operation launchPreviousRetrieve
   */
  static readonly LaunchPreviousRetrievePath = '/2.2.0/launch/previous/{id}/';

  /**
   * API endpoint that returns previous Launch objects.
   *
   * GET
   * Return a list of previous Launches
   *
   * FILTERS
   * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
   *  'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
   *  'related', 'location__ids', 'lsp__ids', 'pad__ids', 'status__ids'
   *
   * MODE
   * 'normal', 'list', 'detailed'
   * EXAMPLE ?mode=list
   *
   * SEARCH
   * Searches through the launch name, rocket name, launch agency and mission name.
   * EXAMPLE - ?search=SpaceX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `launchPreviousRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  launchPreviousRetrieve$Response(params: {

    /**
     * A UUID string identifying this Launch.
     */
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LaunchDetailed>> {

    const rb = new RequestBuilder(this.rootUrl, LaunchService.LaunchPreviousRetrievePath, 'get');
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
        return r as StrictHttpResponse<LaunchDetailed>;
      })
    );
  }

  /**
   * API endpoint that returns previous Launch objects.
   *
   * GET
   * Return a list of previous Launches
   *
   * FILTERS
   * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
   *  'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
   *  'related', 'location__ids', 'lsp__ids', 'pad__ids', 'status__ids'
   *
   * MODE
   * 'normal', 'list', 'detailed'
   * EXAMPLE ?mode=list
   *
   * SEARCH
   * Searches through the launch name, rocket name, launch agency and mission name.
   * EXAMPLE - ?search=SpaceX
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `launchPreviousRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  launchPreviousRetrieve(params: {

    /**
     * A UUID string identifying this Launch.
     */
    id: string;
    context?: HttpContext
  }
): Observable<LaunchDetailed> {

    return this.launchPreviousRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<LaunchDetailed>) => r.body as LaunchDetailed)
    );
  }

  /**
   * Path part for operation launchUpcomingList
   */
  static readonly LaunchUpcomingListPath = '/2.2.0/launch/upcoming/';

  /**
   * API endpoint that returns future Launch objects and launches from the last twenty-four hours.
   *
   * GET
   * Return a list of future Launches
   *
   * FILTERS
   * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
   *  'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
   *  'related', 'location__ids', 'lsp__ids,'pad__ids', 'status__ids', 'hide_recent_previous'
   *
   * MODE
   * 'normal', 'list', 'detailed'
   *
   * EXAMPLE ?mode=list
   *
   * SEARCH
   * Searches through the launch name, rocket name, launch agency and mission name.
   * EXAMPLE - ?search=SpaceX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `launchUpcomingList()` instead.
   *
   * This method doesn't expect any request body.
   */
  launchUpcomingList$Response(params?: {
    agency_launch_attempt_count?: number;
    agency_launch_attempt_count__gt?: number;
    agency_launch_attempt_count__gte?: number;
    agency_launch_attempt_count__lt?: number;
    agency_launch_attempt_count__lte?: number;
    agency_launch_attempt_count_year?: number;
    agency_launch_attempt_count_year__gt?: number;
    agency_launch_attempt_count_year__gte?: number;
    agency_launch_attempt_count_year__lt?: number;
    agency_launch_attempt_count_year__lte?: number;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    location_launch_attempt_count?: number;
    location_launch_attempt_count__gt?: number;
    location_launch_attempt_count__gte?: number;
    location_launch_attempt_count__lt?: number;
    location_launch_attempt_count__lte?: number;
    location_launch_attempt_count_year?: number;
    location_launch_attempt_count_year__gt?: number;
    location_launch_attempt_count_year__gte?: number;
    location_launch_attempt_count_year__lt?: number;
    location_launch_attempt_count_year__lte?: number;
    mission__orbit__name?: string;
    mission__orbit__name__icontains?: string;
    name?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    orbital_launch_attempt_count?: number;
    orbital_launch_attempt_count__gt?: number;
    orbital_launch_attempt_count__gte?: number;
    orbital_launch_attempt_count__lt?: number;
    orbital_launch_attempt_count__lte?: number;
    orbital_launch_attempt_count_year?: number;
    orbital_launch_attempt_count_year__gt?: number;
    orbital_launch_attempt_count_year__gte?: number;
    orbital_launch_attempt_count_year__lt?: number;
    orbital_launch_attempt_count_year__lte?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    pad_launch_attempt_count?: number;
    pad_launch_attempt_count__gt?: number;
    pad_launch_attempt_count__gte?: number;
    pad_launch_attempt_count__lt?: number;
    pad_launch_attempt_count__lte?: number;
    pad_launch_attempt_count_year?: number;
    pad_launch_attempt_count_year__gt?: number;
    pad_launch_attempt_count_year__gte?: number;
    pad_launch_attempt_count_year__lt?: number;
    pad_launch_attempt_count_year__lte?: number;
    program?: Array<number>;
    r_spacex_api_id?: string;
    rocket__configuration__full_name?: string;
    rocket__configuration__full_name__icontains?: string;
    rocket__configuration__id?: number;
    rocket__configuration__manufacturer__name?: string;
    rocket__configuration__manufacturer__name__icontains?: string;
    rocket__configuration__name?: string;
    rocket__spacecraftflight__spacecraft__id?: number;
    rocket__spacecraftflight__spacecraft__name?: string;
    rocket__spacecraftflight__spacecraft__name__icontains?: string;

    /**
     * A search term.
     */
    search?: string;
    slug?: string;
    status?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedLaunchSerializerCommonList>> {

    const rb = new RequestBuilder(this.rootUrl, LaunchService.LaunchUpcomingListPath, 'get');
    if (params) {
      rb.query('agency_launch_attempt_count', params.agency_launch_attempt_count, {});
      rb.query('agency_launch_attempt_count__gt', params.agency_launch_attempt_count__gt, {});
      rb.query('agency_launch_attempt_count__gte', params.agency_launch_attempt_count__gte, {});
      rb.query('agency_launch_attempt_count__lt', params.agency_launch_attempt_count__lt, {});
      rb.query('agency_launch_attempt_count__lte', params.agency_launch_attempt_count__lte, {});
      rb.query('agency_launch_attempt_count_year', params.agency_launch_attempt_count_year, {});
      rb.query('agency_launch_attempt_count_year__gt', params.agency_launch_attempt_count_year__gt, {});
      rb.query('agency_launch_attempt_count_year__gte', params.agency_launch_attempt_count_year__gte, {});
      rb.query('agency_launch_attempt_count_year__lt', params.agency_launch_attempt_count_year__lt, {});
      rb.query('agency_launch_attempt_count_year__lte', params.agency_launch_attempt_count_year__lte, {});
      rb.query('limit', params.limit, {});
      rb.query('location_launch_attempt_count', params.location_launch_attempt_count, {});
      rb.query('location_launch_attempt_count__gt', params.location_launch_attempt_count__gt, {});
      rb.query('location_launch_attempt_count__gte', params.location_launch_attempt_count__gte, {});
      rb.query('location_launch_attempt_count__lt', params.location_launch_attempt_count__lt, {});
      rb.query('location_launch_attempt_count__lte', params.location_launch_attempt_count__lte, {});
      rb.query('location_launch_attempt_count_year', params.location_launch_attempt_count_year, {});
      rb.query('location_launch_attempt_count_year__gt', params.location_launch_attempt_count_year__gt, {});
      rb.query('location_launch_attempt_count_year__gte', params.location_launch_attempt_count_year__gte, {});
      rb.query('location_launch_attempt_count_year__lt', params.location_launch_attempt_count_year__lt, {});
      rb.query('location_launch_attempt_count_year__lte', params.location_launch_attempt_count_year__lte, {});
      rb.query('mission__orbit__name', params.mission__orbit__name, {});
      rb.query('mission__orbit__name__icontains', params.mission__orbit__name__icontains, {});
      rb.query('name', params.name, {});
      rb.query('offset', params.offset, {});
      rb.query('orbital_launch_attempt_count', params.orbital_launch_attempt_count, {});
      rb.query('orbital_launch_attempt_count__gt', params.orbital_launch_attempt_count__gt, {});
      rb.query('orbital_launch_attempt_count__gte', params.orbital_launch_attempt_count__gte, {});
      rb.query('orbital_launch_attempt_count__lt', params.orbital_launch_attempt_count__lt, {});
      rb.query('orbital_launch_attempt_count__lte', params.orbital_launch_attempt_count__lte, {});
      rb.query('orbital_launch_attempt_count_year', params.orbital_launch_attempt_count_year, {});
      rb.query('orbital_launch_attempt_count_year__gt', params.orbital_launch_attempt_count_year__gt, {});
      rb.query('orbital_launch_attempt_count_year__gte', params.orbital_launch_attempt_count_year__gte, {});
      rb.query('orbital_launch_attempt_count_year__lt', params.orbital_launch_attempt_count_year__lt, {});
      rb.query('orbital_launch_attempt_count_year__lte', params.orbital_launch_attempt_count_year__lte, {});
      rb.query('ordering', params.ordering, {});
      rb.query('pad_launch_attempt_count', params.pad_launch_attempt_count, {});
      rb.query('pad_launch_attempt_count__gt', params.pad_launch_attempt_count__gt, {});
      rb.query('pad_launch_attempt_count__gte', params.pad_launch_attempt_count__gte, {});
      rb.query('pad_launch_attempt_count__lt', params.pad_launch_attempt_count__lt, {});
      rb.query('pad_launch_attempt_count__lte', params.pad_launch_attempt_count__lte, {});
      rb.query('pad_launch_attempt_count_year', params.pad_launch_attempt_count_year, {});
      rb.query('pad_launch_attempt_count_year__gt', params.pad_launch_attempt_count_year__gt, {});
      rb.query('pad_launch_attempt_count_year__gte', params.pad_launch_attempt_count_year__gte, {});
      rb.query('pad_launch_attempt_count_year__lt', params.pad_launch_attempt_count_year__lt, {});
      rb.query('pad_launch_attempt_count_year__lte', params.pad_launch_attempt_count_year__lte, {});
      rb.query('program', params.program, {"style":"form","explode":true});
      rb.query('r_spacex_api_id', params.r_spacex_api_id, {});
      rb.query('rocket__configuration__full_name', params.rocket__configuration__full_name, {});
      rb.query('rocket__configuration__full_name__icontains', params.rocket__configuration__full_name__icontains, {});
      rb.query('rocket__configuration__id', params.rocket__configuration__id, {});
      rb.query('rocket__configuration__manufacturer__name', params.rocket__configuration__manufacturer__name, {});
      rb.query('rocket__configuration__manufacturer__name__icontains', params.rocket__configuration__manufacturer__name__icontains, {});
      rb.query('rocket__configuration__name', params.rocket__configuration__name, {});
      rb.query('rocket__spacecraftflight__spacecraft__id', params.rocket__spacecraftflight__spacecraft__id, {});
      rb.query('rocket__spacecraftflight__spacecraft__name', params.rocket__spacecraftflight__spacecraft__name, {});
      rb.query('rocket__spacecraftflight__spacecraft__name__icontains', params.rocket__spacecraftflight__spacecraft__name__icontains, {});
      rb.query('search', params.search, {});
      rb.query('slug', params.slug, {});
      rb.query('status', params.status, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedLaunchSerializerCommonList>;
      })
    );
  }

  /**
   * API endpoint that returns future Launch objects and launches from the last twenty-four hours.
   *
   * GET
   * Return a list of future Launches
   *
   * FILTERS
   * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
   *  'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
   *  'related', 'location__ids', 'lsp__ids,'pad__ids', 'status__ids', 'hide_recent_previous'
   *
   * MODE
   * 'normal', 'list', 'detailed'
   *
   * EXAMPLE ?mode=list
   *
   * SEARCH
   * Searches through the launch name, rocket name, launch agency and mission name.
   * EXAMPLE - ?search=SpaceX
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `launchUpcomingList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  launchUpcomingList(params?: {
    agency_launch_attempt_count?: number;
    agency_launch_attempt_count__gt?: number;
    agency_launch_attempt_count__gte?: number;
    agency_launch_attempt_count__lt?: number;
    agency_launch_attempt_count__lte?: number;
    agency_launch_attempt_count_year?: number;
    agency_launch_attempt_count_year__gt?: number;
    agency_launch_attempt_count_year__gte?: number;
    agency_launch_attempt_count_year__lt?: number;
    agency_launch_attempt_count_year__lte?: number;

    /**
     * Number of results to return per page.
     */
    limit?: number;
    location_launch_attempt_count?: number;
    location_launch_attempt_count__gt?: number;
    location_launch_attempt_count__gte?: number;
    location_launch_attempt_count__lt?: number;
    location_launch_attempt_count__lte?: number;
    location_launch_attempt_count_year?: number;
    location_launch_attempt_count_year__gt?: number;
    location_launch_attempt_count_year__gte?: number;
    location_launch_attempt_count_year__lt?: number;
    location_launch_attempt_count_year__lte?: number;
    mission__orbit__name?: string;
    mission__orbit__name__icontains?: string;
    name?: string;

    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    orbital_launch_attempt_count?: number;
    orbital_launch_attempt_count__gt?: number;
    orbital_launch_attempt_count__gte?: number;
    orbital_launch_attempt_count__lt?: number;
    orbital_launch_attempt_count__lte?: number;
    orbital_launch_attempt_count_year?: number;
    orbital_launch_attempt_count_year__gt?: number;
    orbital_launch_attempt_count_year__gte?: number;
    orbital_launch_attempt_count_year__lt?: number;
    orbital_launch_attempt_count_year__lte?: number;

    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    pad_launch_attempt_count?: number;
    pad_launch_attempt_count__gt?: number;
    pad_launch_attempt_count__gte?: number;
    pad_launch_attempt_count__lt?: number;
    pad_launch_attempt_count__lte?: number;
    pad_launch_attempt_count_year?: number;
    pad_launch_attempt_count_year__gt?: number;
    pad_launch_attempt_count_year__gte?: number;
    pad_launch_attempt_count_year__lt?: number;
    pad_launch_attempt_count_year__lte?: number;
    program?: Array<number>;
    r_spacex_api_id?: string;
    rocket__configuration__full_name?: string;
    rocket__configuration__full_name__icontains?: string;
    rocket__configuration__id?: number;
    rocket__configuration__manufacturer__name?: string;
    rocket__configuration__manufacturer__name__icontains?: string;
    rocket__configuration__name?: string;
    rocket__spacecraftflight__spacecraft__id?: number;
    rocket__spacecraftflight__spacecraft__name?: string;
    rocket__spacecraftflight__spacecraft__name__icontains?: string;

    /**
     * A search term.
     */
    search?: string;
    slug?: string;
    status?: number;
    context?: HttpContext
  }
): Observable<PaginatedLaunchSerializerCommonList> {

    return this.launchUpcomingList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedLaunchSerializerCommonList>) => r.body as PaginatedLaunchSerializerCommonList)
    );
  }

  /**
   * Path part for operation launchUpcomingRetrieve
   */
  static readonly LaunchUpcomingRetrievePath = '/2.2.0/launch/upcoming/{id}/';

  /**
   * API endpoint that returns future Launch objects and launches from the last twenty-four hours.
   *
   * GET
   * Return a list of future Launches
   *
   * FILTERS
   * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
   *  'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
   *  'related', 'location__ids', 'lsp__ids,'pad__ids', 'status__ids', 'hide_recent_previous'
   *
   * MODE
   * 'normal', 'list', 'detailed'
   *
   * EXAMPLE ?mode=list
   *
   * SEARCH
   * Searches through the launch name, rocket name, launch agency and mission name.
   * EXAMPLE - ?search=SpaceX
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `launchUpcomingRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  launchUpcomingRetrieve$Response(params: {

    /**
     * A UUID string identifying this Launch.
     */
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LaunchDetailed>> {

    const rb = new RequestBuilder(this.rootUrl, LaunchService.LaunchUpcomingRetrievePath, 'get');
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
        return r as StrictHttpResponse<LaunchDetailed>;
      })
    );
  }

  /**
   * API endpoint that returns future Launch objects and launches from the last twenty-four hours.
   *
   * GET
   * Return a list of future Launches
   *
   * FILTERS
   * Fields - 'name', 'id(s)', 'lsp__id', 'lsp__name', 'serial_number', 'launcher_config__id',
   *  'rocket__spacecraftflight__spacecraft__name', 'is_crewed', 'include_suborbital', 'spacecraft_config__ids',
   *  'related', 'location__ids', 'lsp__ids,'pad__ids', 'status__ids', 'hide_recent_previous'
   *
   * MODE
   * 'normal', 'list', 'detailed'
   *
   * EXAMPLE ?mode=list
   *
   * SEARCH
   * Searches through the launch name, rocket name, launch agency and mission name.
   * EXAMPLE - ?search=SpaceX
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `launchUpcomingRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  launchUpcomingRetrieve(params: {

    /**
     * A UUID string identifying this Launch.
     */
    id: string;
    context?: HttpContext
  }
): Observable<LaunchDetailed> {

    return this.launchUpcomingRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<LaunchDetailed>) => r.body as LaunchDetailed)
    );
  }

}
