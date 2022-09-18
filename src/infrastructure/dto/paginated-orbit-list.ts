/* tslint:disable */
/* eslint-disable */
import { Orbit } from './orbit';
export interface PaginatedOrbitList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Orbit>;
}
