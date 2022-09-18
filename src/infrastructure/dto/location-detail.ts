/* tslint:disable */
/* eslint-disable */
import { PadSerializerNoLocation } from './pad-serializer-no-location';
export interface LocationDetail {
  country_code?: string;
  id: number;
  map_image?: null | string;
  name?: string;
  pads: Array<PadSerializerNoLocation>;
  total_landing_count?: null | number;
  total_launch_count?: null | number;
}
