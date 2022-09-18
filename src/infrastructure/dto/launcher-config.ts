/* tslint:disable */
/* eslint-disable */
import { Agency } from './agency';
import { Program } from './program';
export interface LauncherConfig {
  family?: string;
  full_name?: string;
  id: number;
  image_url?: null | string;
  info_url?: null | string;
  manufacturer: Agency;
  name: string;
  program: Array<Program>;
  reusable?: boolean;
  url: string;
  variant?: string;
  wiki_url?: null | string;
}
