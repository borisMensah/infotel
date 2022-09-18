/* tslint:disable */
/* eslint-disable */
import { Update } from './update';
export interface PaginatedUpdateList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Update>;
}
