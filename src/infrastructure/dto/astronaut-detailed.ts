/* tslint:disable */
/* eslint-disable */
import { AgencySerializerMini } from './agency-serializer-mini';
import { AstronautStatus } from './astronaut-status';
import { AstronautType } from './astronaut-type';
import { LaunchSerializerCommon } from './launch-serializer-common';
import { SpacecraftFlight } from './spacecraft-flight';
export interface AstronautDetailed {
  age?: null | number;
  agency: AgencySerializerMini;
  bio: string;
  date_of_birth?: null | string;
  date_of_death?: null | string;
  first_flight?: null | string;
  flights: Array<LaunchSerializerCommon>;
  flights_count?: null | number;
  id: number;
  instagram?: null | string;
  landings: Array<SpacecraftFlight>;
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
