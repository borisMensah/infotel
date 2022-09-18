/* tslint:disable */
/* eslint-disable */
import { Agency } from './agency';
import { SpacecraftConfigType } from './spacecraft-config-type';
export interface SpacecraftConfigurationDetail {
  agency: Agency;
  capability?: string;
  crew_capacity?: null | number;
  details?: string;
  diameter?: null | number;
  flight_life?: null | string;
  height?: null | number;
  history?: string;
  human_rated?: boolean;
  id: number;
  image_url?: null | string;
  in_use?: boolean;
  info_link?: string;
  maiden_flight?: null | string;
  name: string;
  nation_url?: null | string;
  payload_capacity?: null | number;
  type: SpacecraftConfigType;
  url: string;
  wiki_link?: string;
}
