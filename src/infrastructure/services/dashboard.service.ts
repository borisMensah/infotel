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


@Injectable({
  providedIn: 'root',
})
export class DashboardService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation dashboardStarshipRetrieve
   */
  static readonly DashboardStarshipRetrievePath = '/2.2.0/dashboard/starship/';

  /**
   * Return a dashboard of SpaceX operations for Starship development.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dashboardStarshipRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardStarshipRetrieve$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardService.DashboardStarshipRetrievePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Return a dashboard of SpaceX operations for Starship development.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `dashboardStarshipRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dashboardStarshipRetrieve(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.dashboardStarshipRetrieve$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
