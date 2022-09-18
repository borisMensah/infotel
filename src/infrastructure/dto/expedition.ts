/* tslint:disable */
/* eslint-disable */
import { MissionPatch } from './mission-patch';
import { SpaceStationSerializerForExpedition } from './space-station-serializer-for-expedition';
export interface Expedition {
  end?: null | string;
  id: number;
  mission_patches: Array<MissionPatch>;
  name: string;
  spacestation: SpaceStationSerializerForExpedition;
  start: string;
  url: string;
}
