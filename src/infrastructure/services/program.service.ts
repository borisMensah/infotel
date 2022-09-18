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

import { PaginatedProgramList } from '../dto/paginated-program-list';
import { Program } from '../dto/program';

@Injectable({
  providedIn: 'root',
})
export class ProgramService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation programList
   */
  static readonly ProgramListPath = '/2.2.0/program/';

  /**
   * API endpoint that returns Program objects.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `programList()` instead.
   *
   * This method doesn't expect any request body.
   */
  programList$Response(params?: {

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
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PaginatedProgramList>> {

    const rb = new RequestBuilder(this.rootUrl, ProgramService.ProgramListPath, 'get');
    if (params) {
      rb.query('limit', params.limit, {});
      rb.query('offset', params.offset, {});
      rb.query('ordering', params.ordering, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PaginatedProgramList>;
      })
    );
  }

  /**
   * API endpoint that returns Program objects.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `programList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  programList(params?: {

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
    context?: HttpContext
  }
): Observable<PaginatedProgramList> {

    return this.programList$Response(params).pipe(
      map((r: StrictHttpResponse<PaginatedProgramList>) => r.body as PaginatedProgramList)
    );
  }

  /**
   * Path part for operation programRetrieve
   */
  static readonly ProgramRetrievePath = '/2.2.0/program/{id}/';

  /**
   * API endpoint that returns Program objects.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `programRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  programRetrieve$Response(params: {

    /**
     * A unique integer value identifying this Program.
     */
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Program>> {

    const rb = new RequestBuilder(this.rootUrl, ProgramService.ProgramRetrievePath, 'get');
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
        return r as StrictHttpResponse<Program>;
      })
    );
  }

  /**
   * API endpoint that returns Program objects.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `programRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  programRetrieve(params: {

    /**
     * A unique integer value identifying this Program.
     */
    id: number;
    context?: HttpContext
  }
): Observable<Program> {

    return this.programRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<Program>) => r.body as Program)
    );
  }

}
