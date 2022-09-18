/* tslint:disable */
/* eslint-disable */
import { AgencySerializerMini } from './agency-serializer-mini';
import { AstronautStatus } from './astronaut-status';
export interface Astronaut {
  agency: AgencySerializerMini;
  id: number;
  name: string;
  profile_image?: null | string;
  profile_image_thumbnail?: null | string;
  status: AstronautStatus;
  url: string;
}
