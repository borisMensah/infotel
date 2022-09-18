/* tslint:disable */
/* eslint-disable */
import { SpacecraftConfigurationDetail } from './spacecraft-configuration-detail';
import { SpacecraftStatus } from './spacecraft-status';
export interface SpacecraftDetailedNoFlights {
  description: string;
  id: number;
  name: string;
  serial_number?: null | string;
  spacecraft_config: SpacecraftConfigurationDetail;
  status: SpacecraftStatus;
  url: string;
}
