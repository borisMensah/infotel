/* tslint:disable */
/* eslint-disable */
import { SpaceStation } from './space-station';
export interface PaginatedSpaceStationList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<SpaceStation>;
}
