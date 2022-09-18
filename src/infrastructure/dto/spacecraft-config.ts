/* tslint:disable */
/* eslint-disable */
import { AgencySerializerMini } from './agency-serializer-mini';
import { SpacecraftConfigType } from './spacecraft-config-type';
export interface SpacecraftConfig {
  agency: AgencySerializerMini;
  id: number;
  image_url?: null | string;
  in_use?: boolean;
  name: string;
  type: SpacecraftConfigType;
  url: string;
}
