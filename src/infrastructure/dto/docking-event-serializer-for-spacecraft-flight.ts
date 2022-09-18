/* tslint:disable */
/* eslint-disable */
import { DockingLocation } from './docking-location';
import { SpaceStationSerializerForCommon } from './space-station-serializer-for-common';
export interface DockingEventSerializerForSpacecraftFlight {
  departure?: null | string;
  docking: string;
  docking_location: DockingLocation;
  spacestation: SpaceStationSerializerForCommon;
}
