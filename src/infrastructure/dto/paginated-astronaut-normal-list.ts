/* tslint:disable */
/* eslint-disable */
import { AstronautNormal } from './astronaut-normal';
export interface PaginatedAstronautNormalList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<AstronautNormal>;
}
