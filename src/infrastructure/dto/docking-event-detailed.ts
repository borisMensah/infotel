/* tslint:disable */
/* eslint-disable */
import { DockingLocation } from './docking-location';
import { SpaceStationSerializerForDockingEvent } from './space-station-serializer-for-docking-event';
import { SpacecraftFlightSerializerForDockingEventDetailed } from './spacecraft-flight-serializer-for-docking-event-detailed';
export interface DockingEventDetailed {
  departure?: null | string;
  docking: string;
  docking_location: DockingLocation;
  flight_vehicle: SpacecraftFlightSerializerForDockingEventDetailed;
  id: number;
  launch_id: string;
  space_station: SpaceStationSerializerForDockingEvent;
  url: string;
}
