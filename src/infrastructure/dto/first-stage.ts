/* tslint:disable */
/* eslint-disable */
import { Landing } from './landing';
import { LaunchSerializerMini } from './launch-serializer-mini';
import { LauncherDetailed } from './launcher-detailed';
export interface FirstStage {
  id: number;
  landing: Landing;
  launcher: LauncherDetailed;
  launcher_flight_number?: null | number;
  previous_flight: LaunchSerializerMini;
  previous_flight_date?: null | string;
  reused?: null | boolean;
  turn_around_time_days?: null | number;
  type: string;
}
