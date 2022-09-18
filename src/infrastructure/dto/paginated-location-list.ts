/* tslint:disable */
/* eslint-disable */
import { Location } from './location';
export interface PaginatedLocationList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Location>;
}
