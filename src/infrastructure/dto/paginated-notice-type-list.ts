/* tslint:disable */
/* eslint-disable */
import { NoticeType } from './notice-type';
export interface PaginatedNoticeTypeList {
  count?: number;
  next?: null | string;
  previous?: null | string;
  results?: Array<NoticeType>;
}
