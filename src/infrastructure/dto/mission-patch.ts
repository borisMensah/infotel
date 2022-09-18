/* tslint:disable */
/* eslint-disable */
import { AgencySerializerMini } from './agency-serializer-mini';
export interface MissionPatch {
  agency: AgencySerializerMini;
  id: number;
  image_url: string;
  name: string;
  priority?: number;
}
