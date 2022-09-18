/* tslint:disable */
/* eslint-disable */
import { AstronautFlightForExpedition } from './astronaut-flight-for-expedition';
import { MissionPatch } from './mission-patch';
import { SpaceStationDetailedSerializerForExpedition } from './space-station-detailed-serializer-for-expedition';
export interface ExpeditionDetail {
  crew: Array<AstronautFlightForExpedition>;
  end?: null | string;
  id: number;
  mission_patches: Array<MissionPatch>;
  name: string;
  spacestation: SpaceStationDetailedSerializerForExpedition;
  start: string;
  url: string;
}
