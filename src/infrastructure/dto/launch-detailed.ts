/* tslint:disable */
/* eslint-disable */
import { AgencySerializerDetailedCommon } from './agency-serializer-detailed-common';
import { InfoUrl } from './info-url';
import { LaunchStatus } from './launch-status';
import { Mission } from './mission';
import { MissionPatch } from './mission-patch';
import { Pad } from './pad';
import { Program } from './program';
import { RocketDetailed } from './rocket-detailed';
import { Update } from './update';
import { VidUrl } from './vid-url';
export interface LaunchDetailed {
  agency_launch_attempt_count: null | number;
  agency_launch_attempt_count_year: null | number;
  failreason: null | string;
  flightclub_url: null | string;
  hashtag: null | string;
  holdreason: null | string;
  id: string;
  image: string;
  infoURLs: Array<InfoUrl>;
  infographic: string;
  last_updated: string;
  launch_service_provider: AgencySerializerDetailedCommon;
  location_launch_attempt_count: null | number;
  location_launch_attempt_count_year: null | number;
  mission: Mission;
  mission_patches: Array<MissionPatch>;
  name: string;
  net: null | string;
  orbital_launch_attempt_count: null | number;
  orbital_launch_attempt_count_year: null | number;
  pad: Pad;
  pad_launch_attempt_count: null | number;
  pad_launch_attempt_count_year: null | number;
  probability: null | number;
  program: Array<Program>;
  r_spacex_api_id: null | string;
  rocket: RocketDetailed;
  slug: string;
  status: LaunchStatus;
  updates: Array<Update>;
  url: string;
  vidURLs: Array<VidUrl>;
  webcast_live: boolean;
  window_end: null | string;
  window_start: null | string;
}
