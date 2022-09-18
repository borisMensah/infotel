/* tslint:disable */
/* eslint-disable */
import { LauncherConfigList } from './launcher-config-list';
export interface Launcher {
  details?: string;
  first_launch_date?: null | string;
  flight_proven?: boolean;
  flights?: null | number;
  id: number;
  image_url?: null | string;
  last_launch_date?: null | string;
  launcher_config: LauncherConfigList;
  serial_number?: null | string;
  status?: string;
  url: string;
}
