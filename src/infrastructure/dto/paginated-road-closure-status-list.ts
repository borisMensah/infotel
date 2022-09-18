/* tslint:disable */
/* eslint-disable */
import { RoadClosureStatus } from './road-closure-status';
export interface PaginatedRoadClosureStatusList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<RoadClosureStatus>;
}
