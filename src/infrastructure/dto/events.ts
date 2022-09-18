/* tslint:disable */
/* eslint-disable */
import { EventType } from './event-type';
import { Expedition } from './expedition';
import { LaunchSerializerCommon } from './launch-serializer-common';
import { Program } from './program';
import { SpaceStationSerializerForCommon } from './space-station-serializer-for-common';
import { Update } from './update';
export interface Events {
  date?: null | string;
  description?: string;
  expeditions: Array<Expedition>;
  feature_image?: string;
  id: number;
  launches: Array<LaunchSerializerCommon>;
  location?: null | string;
  name: string;
  news_url?: null | string;
  program: Array<Program>;
  slug: string;
  spacestations: Array<SpaceStationSerializerForCommon>;
  type: EventType;
  updates: Array<Update>;
  url: string;
  video_url?: null | string;
  webcast_live?: boolean;
}
