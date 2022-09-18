/* tslint:disable */
/* eslint-disable */
import { Orbit } from './orbit';
export interface Mission {
  description?: string;
  id: number;
  launch_designator?: null | string;
  name?: string;
  orbit: Orbit;
  type: string;
}
