/* tslint:disable */
/* eslint-disable */
import { AstronautFlight } from './astronaut-flight';
import { DockingEventSerializerForSpacecraftFlight } from './docking-event-serializer-for-spacecraft-flight';
import { LaunchSerializerCommon } from './launch-serializer-common';
import { SpacecraftDetailedNoFlights } from './spacecraft-detailed-no-flights';
export interface SpacecraftFlightDetailed {
  destination?: null | string;
  docking_events: Array<DockingEventSerializerForSpacecraftFlight>;
  id: number;
  landing_crew: Array<AstronautFlight>;
  launch: LaunchSerializerCommon;
  launch_crew: Array<AstronautFlight>;
  mission_end?: null | string;
  onboard_crew: Array<AstronautFlight>;
  spacecraft: SpacecraftDetailedNoFlights;
  url: string;
}
