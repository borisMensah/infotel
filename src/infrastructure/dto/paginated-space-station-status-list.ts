/* tslint:disable */
/* eslint-disable */
import { SpaceStationStatus } from './space-station-status';
export interface PaginatedSpaceStationStatusList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<SpaceStationStatus>;
}
