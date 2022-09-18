/* tslint:disable */
/* eslint-disable */
import { Agency } from './agency';
export interface PaginatedAgencyList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Agency>;
}
