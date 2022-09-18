/* tslint:disable */
/* eslint-disable */
import { LaunchSerializerCommon } from './launch-serializer-common';
import { Spacecraft } from './spacecraft';
export interface SpacecraftFlight {
  destination?: null | string;
  id: number;
  launch: LaunchSerializerCommon;
  mission_end?: null | string;
  spacecraft: Spacecraft;
  url: string;
}
