/* tslint:disable */
/* eslint-disable */
import { AgencyList } from './agency-list';
import { ExpeditionSerializerForSpacestation } from './expedition-serializer-for-spacestation';
import { SpaceStationStatus } from './space-station-status';
import { SpaceStationType } from './space-station-type';
export interface SpaceStation {
  active_expedition: Array<ExpeditionSerializerForSpacestation>;
  deorbited?: null | string;
  description: string;
  founded: string;
  id: number;
  image_url?: null | string;
  name: string;
  orbit: string;
  owners: Array<AgencyList>;
  status: SpaceStationStatus;
  type: SpaceStationType;
  url: string;
}
