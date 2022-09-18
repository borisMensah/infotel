/* tslint:disable */
/* eslint-disable */
import { AstronautDetailedSerializerNoFlights } from './astronaut-detailed-serializer-no-flights';
import { AstronautRole } from './astronaut-role';
export interface AstronautFlight {
  astronaut: AstronautDetailedSerializerNoFlights;
  id: number;
  role: AstronautRole;
}
