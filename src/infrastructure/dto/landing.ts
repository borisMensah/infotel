/* tslint:disable */
/* eslint-disable */
import { LandingLocation } from './landing-location';
import { LandingType } from './landing-type';
export interface Landing {
  attempt?: boolean;
  description?: string;
  id: number;
  location: LandingLocation;
  success?: null | boolean;
  type: LandingType;
}
