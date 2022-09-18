/* tslint:disable */
/* eslint-disable */
import { AgencySerializerMini } from './agency-serializer-mini';
import { MissionPatch } from './mission-patch';
export interface Program {
  agencies: Array<AgencySerializerMini>;
  description?: null | string;
  end_date?: null | string;
  id: number;
  image_url: string;
  info_url?: null | string;
  mission_patches: Array<MissionPatch>;
  name: string;
  start_date?: null | string;
  url: string;
  wiki_url?: null | string;
}
