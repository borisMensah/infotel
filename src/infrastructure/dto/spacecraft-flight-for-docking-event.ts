/* tslint:disable */
/* eslint-disable */
import { LaunchSerializerCommon } from './launch-serializer-common';
import { SpacecraftDetailedNoFlights } from './spacecraft-detailed-no-flights';
export interface SpacecraftFlightForDockingEvent {
  id: number;
  launch: LaunchSerializerCommon;
  spacecraft: SpacecraftDetailedNoFlights;
  url: string;
}
