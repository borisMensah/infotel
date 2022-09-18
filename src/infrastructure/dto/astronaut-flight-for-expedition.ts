/* tslint:disable */
/* eslint-disable */
import { Astronaut } from './astronaut';
import { AstronautRole } from './astronaut-role';
export interface AstronautFlightForExpedition {
  astronaut: Astronaut;
  id: number;
  role: AstronautRole;
}
