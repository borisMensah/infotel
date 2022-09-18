/* tslint:disable */
/* eslint-disable */
import { Launcher } from './launcher';
export interface PaginatedLauncherList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Launcher>;
}
