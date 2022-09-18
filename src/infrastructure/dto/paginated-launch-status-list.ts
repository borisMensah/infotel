/* tslint:disable */
/* eslint-disable */
import { LaunchStatus } from './launch-status';
export interface PaginatedLaunchStatusList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<LaunchStatus>;
}
