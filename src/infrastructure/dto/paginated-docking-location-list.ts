/* tslint:disable */
/* eslint-disable */
import { DockingLocation } from './docking-location';
export interface PaginatedDockingLocationList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<DockingLocation>;
}
