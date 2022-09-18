/* tslint:disable */
/* eslint-disable */
import { DockingLocation } from './docking-location';
import { SpacecraftFlightSerializerForDockingEvent } from './spacecraft-flight-serializer-for-docking-event';
export interface DockingEvent {
  departure?: null | string;
  docking: string;
  docking_location: DockingLocation;
  flight_vehicle: SpacecraftFlightSerializerForDockingEvent;
  id: number;
  launch_id: string;
  url: string;
}
