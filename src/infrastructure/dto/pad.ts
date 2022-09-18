/* tslint:disable */
/* eslint-disable */
import { Location } from './location';
export interface Pad {
  agency_id?: null | number;
  id: number;
  info_url?: null | string;
  latitude?: null | string;
  location: Location;
  longitude?: null | string;
  map_image?: null | string;
  map_url?: null | string;
  name?: string;
  orbital_launch_attempt_count?: null | number;
  total_launch_count?: null | number;
  url: string;
  wiki_url?: null | string;
}
