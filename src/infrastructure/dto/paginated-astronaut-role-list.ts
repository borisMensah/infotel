/* tslint:disable */
/* eslint-disable */
import { AstronautRole } from './astronaut-role';
export interface PaginatedAstronautRoleList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<AstronautRole>;
}
