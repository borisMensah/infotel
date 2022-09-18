/* tslint:disable */
/* eslint-disable */
import { FirstStage } from './first-stage';
import { LauncherConfigDetail } from './launcher-config-detail';
import { SpacecraftFlightDetailedSerializerForLaunch } from './spacecraft-flight-detailed-serializer-for-launch';
export interface RocketDetailed {
  configuration: LauncherConfigDetail;
  id: number;
  launcher_stage: Array<FirstStage>;
  spacecraft_stage: SpacecraftFlightDetailedSerializerForLaunch;
}
