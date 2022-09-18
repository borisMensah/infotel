/* tslint:disable */
/* eslint-disable */
import { AstronautType } from './astronaut-type';
export interface PaginatedAstronautTypeList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<AstronautType>;
}
