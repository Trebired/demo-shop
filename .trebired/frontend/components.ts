import type { FrontendComponentsConfig } from "@trebired/frontend/config";

import { data } from "./data";
import { feedback } from "./feedback";
import { media } from "./media";
import { overlays } from "./overlays";
import { primitives } from "./primitives";
import { shell } from "./shell";
import { surfaces } from "./surfaces";
import { typography } from "./typography";

export const components = {
  data,
  feedback,
  media,
  overlays,
  primitives,
  shell,
  surfaces,
  typography,
} satisfies FrontendComponentsConfig;
