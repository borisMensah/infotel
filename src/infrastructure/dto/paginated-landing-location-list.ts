/* tslint:disable */
/* eslint-disable */
import { LandingLocation } from './landing-location';
export interface PaginatedLandingLocationList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<LandingLocation>;
}
