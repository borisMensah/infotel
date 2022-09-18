/* tslint:disable */
/* eslint-disable */
import { AgencyList } from './agency-list';
import { SpaceStationStatus } from './space-station-status';
export interface SpaceStationDetailedSerializerForExpedition {
  description: string;
  founded: string;
  id: number;
  image_url?: null | string;
  name: string;
  orbit: string;
  owners: Array<AgencyList>;
  status: SpaceStationStatus;
  url: string;
}
