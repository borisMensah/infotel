/* tslint:disable */
/* eslint-disable */
import { SpacecraftConfig } from './spacecraft-config';
import { SpacecraftStatus } from './spacecraft-status';
export interface Spacecraft {
  description: string;
  id: number;
  name: string;
  serial_number?: null | string;
  spacecraft_config: SpacecraftConfig;
  status: SpacecraftStatus;
  url: string;
}
