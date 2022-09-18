/* tslint:disable */
/* eslint-disable */
import { Expedition } from './expedition';
export interface PaginatedExpeditionList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Expedition>;
}
