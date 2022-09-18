/* tslint:disable */
/* eslint-disable */
import { EventType } from './event-type';
export interface PaginatedEventTypeList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<EventType>;
}
