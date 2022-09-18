/* tslint:disable */
/* eslint-disable */
import { AstronautStatus } from './astronaut-status';
export interface PaginatedAstronautStatusList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<AstronautStatus>;
}
