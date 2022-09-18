/* tslint:disable */
/* eslint-disable */
import { SpacecraftStatus } from './spacecraft-status';
export interface PaginatedSpacecraftStatusList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<SpacecraftStatus>;
}
