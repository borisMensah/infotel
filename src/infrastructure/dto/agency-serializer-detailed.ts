/* tslint:disable */
/* eslint-disable */
import { LauncherConfigDetailSerializerForAgency } from './launcher-config-detail-serializer-for-agency';
import { SpacecraftConfigurationDetail } from './spacecraft-configuration-detail';
export interface AgencySerializerDetailed {
  abbrev?: string;
  administrator?: null | string;
  attempted_landings?: null | number;
  consecutive_successful_landings?: null | number;
  consecutive_successful_launches?: null | number;
  country_code?: string;
  description?: null | string;
  failed_landings?: null | number;
  failed_launches?: null | number;
  featured?: boolean;
  founding_year?: null | string;
  id: number;
  image_url?: null | string;
  info_url?: null | string;
  launch_library_url: string;
  launcher_list: Array<LauncherConfigDetailSerializerForAgency>;
  launchers?: string;
  logo_url?: null | string;
  name: string;
  nation_url?: null | string;
  parent: string;
  pending_launches?: null | number;
  spacecraft?: string;
  spacecraft_list: Array<SpacecraftConfigurationDetail>;
  successful_landings?: null | number;
  successful_launches?: null | number;
  total_launch_count?: null | number;
  type?: null | string;
  url: string;
  wiki_url?: null | string;
}
