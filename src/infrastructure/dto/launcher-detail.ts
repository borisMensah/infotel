/* tslint:disable */
/* eslint-disable */
import { LauncherConfigDetail } from './launcher-config-detail';
export interface LauncherDetail {
  attempted_landings?: null | number;
  details?: string;
  first_launch_date?: null | string;
  flight_proven?: boolean;
  flights?: null | number;
  id: number;
  image_url?: null | string;
  last_launch_date?: null | string;
  launcher_config: LauncherConfigDetail;
  serial_number?: null | string;
  status?: string;
  successful_landings?: null | number;
  url: string;
}
