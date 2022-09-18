/* tslint:disable */
/* eslint-disable */
import { Agency } from './agency';
import { DockingLocationSerializerForSpacestation } from './docking-location-serializer-for-spacestation';
import { ExpeditionDetailedSerializerForSpacestation } from './expedition-detailed-serializer-for-spacestation';
import { SpaceStationStatus } from './space-station-status';
import { SpaceStationType } from './space-station-type';
export interface SpaceStationDetailed {
  active_expeditions: Array<ExpeditionDetailedSerializerForSpacestation>;
  deorbited?: null | string;
  description: string;
  docked_vehicles?: null | number;
  docking_location: Array<DockingLocationSerializerForSpacestation>;
  founded: string;
  height?: null | number;
  id: number;
  image_url?: null | string;
  mass?: null | number;
  name: string;
  onboard_crew?: null | number;
  orbit: string;
  owners: Array<Agency>;
  status: SpaceStationStatus;
  type: SpaceStationType;
  url: string;
  volume?: null | number;
  width?: null | number;
}
