/* tslint:disable */
/* eslint-disable */
import { Events } from './events';
export interface PaginatedEventsList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Events>;
}
