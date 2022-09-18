/* tslint:disable */
/* eslint-disable */
import { Pad } from './pad';
export interface PaginatedPadList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Pad>;
}
