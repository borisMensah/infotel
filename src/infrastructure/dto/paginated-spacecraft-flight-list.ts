/* tslint:disable */
/* eslint-disable */
import { SpacecraftFlight } from './spacecraft-flight';
export interface PaginatedSpacecraftFlightList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<SpacecraftFlight>;
}
