/* tslint:disable */
/* eslint-disable */
import { LauncherConfig } from './launcher-config';
export interface PaginatedLauncherConfigList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<LauncherConfig>;
}
