/* tslint:disable */
/* eslint-disable */
import { Spacecraft } from './spacecraft';
export interface SpacecraftFlightSerializerForDockingEvent {
  destination?: null | string;
  id: number;
  mission_end?: null | string;
  spacecraft: Spacecraft;
  url: string;
}
