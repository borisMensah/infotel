/* tslint:disable */
/* eslint-disable */
import { AgencySerializerMini } from './agency-serializer-mini';
import { AstronautStatus } from './astronaut-status';
import { AstronautType } from './astronaut-type';
export interface AstronautDetailedSerializerNoFlights {
  agency: AgencySerializerMini;
  bio: string;
  date_of_birth?: null | string;
  date_of_death?: null | string;
  first_flight?: null | string;
  id: number;
  instagram?: null | string;
  last_flight?: null | string;
  name: string;
  nationality: string;
  profile_image?: null | string;
  status: AstronautStatus;
  twitter?: null | string;
  type: AstronautType;
  url: string;
  wiki?: null | string;
}
