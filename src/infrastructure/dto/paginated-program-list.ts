/* tslint:disable */
/* eslint-disable */
import { Program } from './program';
export interface PaginatedProgramList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<Program>;
}
