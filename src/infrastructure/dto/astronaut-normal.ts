/* tslint:disable */
/* eslint-disable */
import { Agency } from './agency';
import { AstronautStatus } from './astronaut-status';
import { AstronautType } from './astronaut-type';
export interface AstronautNormal {
  age?: null | number;
  agency: Agency;
  bio: string;
  date_of_birth?: null | string;
  date_of_death?: null | string;
  first_flight?: null | string;
  flights_count?: null | number;
  id: number;
  instagram?: null | string;
  landings_count?: null | number;
  last_flight?: null | string;
  name: string;
  nationality: string;
  profile_image?: null | string;
  profile_image_thumbnail?: null | string;
  status: AstronautStatus;
  twitter?: null | string;
  type: AstronautType;
  url: string;
  wiki?: null | string;
}
