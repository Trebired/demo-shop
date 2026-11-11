import type { FrontendConfig } from "@trebired/frontend/config";

export const systems = {
  actions: true,
  flash: true,
  fullscreen: true,
  icons: true,
  inputs: true,
  layer: true,
  language: true,
  layout: true,
  modal: true,
  popover: true,
  primitives: true,
  progress: true,
  sidebar: true,
  surface: true,
  theme: true,
  tooltip: true,
} satisfies FrontendConfig["systems"];
