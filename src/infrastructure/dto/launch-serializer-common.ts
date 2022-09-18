/* tslint:disable */
/* eslint-disable */
import { AgencySerializerMini } from './agency-serializer-mini';
import { LaunchStatus } from './launch-status';
import { Mission } from './mission';
import { Pad } from './pad';
import { Program } from './program';
import { RocketSerializerCommon } from './rocket-serializer-common';
export interface LaunchSerializerCommon {
  agency_launch_attempt_count?: null | number;
  agency_launch_attempt_count_year?: null | number;
  failreason?: null | string;
  hashtag?: null | string;
  holdreason?: null | string;
  id: string;
  image: string;
  infographic: string;
  last_updated: string;
  launch_service_provider: AgencySerializerMini;
  location_launch_attempt_count?: null | number;
  location_launch_attempt_count_year?: null | number;
  mission: Mission;
  name?: string;
  net?: null | string;
  orbital_launch_attempt_count?: null | number;
  orbital_launch_attempt_count_year?: null | number;
  pad: Pad;
  pad_launch_attempt_count?: null | number;
  pad_launch_attempt_count_year?: null | number;
  probability?: null | number;
  program: Array<Program>;
  rocket: RocketSerializerCommon;
  slug: string;
  status: LaunchStatus;
  url: string;
  webcast_live?: boolean;
  window_end?: null | string;
  window_start?: null | string;
}
