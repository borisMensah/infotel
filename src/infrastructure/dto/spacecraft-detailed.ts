/* tslint:disable */
/* eslint-disable */
import { SpacecraftConfigurationDetail } from './spacecraft-configuration-detail';
import { SpacecraftFlight } from './spacecraft-flight';
import { SpacecraftStatus } from './spacecraft-status';
export interface SpacecraftDetailed {
  description: string;
  flights: Array<SpacecraftFlight>;
  id: number;
  name: string;
  serial_number?: null | string;
  spacecraft_config: SpacecraftConfigurationDetail;
  status: SpacecraftStatus;
  url: string;
}
