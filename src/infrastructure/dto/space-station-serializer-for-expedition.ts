/* tslint:disable */
/* eslint-disable */
import { SpaceStationStatus } from './space-station-status';
export interface SpaceStationSerializerForExpedition {
  id: number;
  image_url?: null | string;
  name: string;
  orbit: string;
  status: SpaceStationStatus;
  url: string;
}
