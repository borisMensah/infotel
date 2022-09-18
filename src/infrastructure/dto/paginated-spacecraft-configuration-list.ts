/* tslint:disable */
/* eslint-disable */
import { SpacecraftConfiguration } from './spacecraft-configuration';
export interface PaginatedSpacecraftConfigurationList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<SpacecraftConfiguration>;
}
