/* tslint:disable */
/* eslint-disable */
import { MissionType } from './mission-type';
export interface PaginatedMissionTypeList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<MissionType>;
}
