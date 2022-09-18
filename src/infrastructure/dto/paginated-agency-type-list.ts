/* tslint:disable */
/* eslint-disable */
import { AgencyType } from './agency-type';
export interface PaginatedAgencyTypeList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<AgencyType>;
}
