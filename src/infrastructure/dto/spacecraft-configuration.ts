/* tslint:disable */
/* eslint-disable */
import { Agency } from './agency';
export interface SpacecraftConfiguration {
  agency: Agency;
  capability?: string;
  crew_capacity?: null | number;
  human_rated?: boolean;
  id: number;
  image_url?: null | string;
  in_use?: boolean;
  info_link?: string;
  maiden_flight?: null | string;
  name: string;
  nation_url?: null | string;
  url: string;
  wiki_link?: string;
}
