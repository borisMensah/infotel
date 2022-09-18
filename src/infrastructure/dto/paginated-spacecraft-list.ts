/* tslint:disable */
/* eslint-disable */
import { Spacecraft } from './spacecraft';
export interface PaginatedSpacecraftList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Spacecraft>;
}
