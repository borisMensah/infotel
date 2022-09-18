/* tslint:disable */
/* eslint-disable */
import { AgencySerializerDetailedCommon } from './agency-serializer-detailed-common';
import { Program } from './program';
export interface LauncherConfigDetail {
  alias?: string;
  apogee?: null | number;
  consecutive_successful_launches?: null | number;
  description?: string;
  diameter?: null | number;
  failed_launches?: null | number;
  family?: string;
  full_name?: string;
  gto_capacity?: null | number;
  id: number;
  image_url?: null | string;
  info_url?: null | string;
  launch_cost?: null | string;
  launch_mass?: null | number;
  length?: null | number;
  leo_capacity?: null | number;
  maiden_flight?: null | string;
  manufacturer: AgencySerializerDetailedCommon;
  max_stage?: null | number;
  min_stage?: null | number;
  name: string;
  pending_launches?: null | number;
  program: Array<Program>;
  successful_launches?: null | number;
  to_thrust?: null | number;
  total_launch_count?: null | number;
  url: string;
  variant?: string;
  vehicle_range?: null | number;
  wiki_url?: null | string;
}
