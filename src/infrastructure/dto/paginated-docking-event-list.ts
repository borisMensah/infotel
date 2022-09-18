/* tslint:disable */
/* eslint-disable */
import { DockingEvent } from './docking-event';
export interface PaginatedDockingEventList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<DockingEvent>;
}
