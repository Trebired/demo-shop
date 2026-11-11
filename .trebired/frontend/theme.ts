import type {
  FrontendDesignConfig,
  FrontendRuntimeConfig,
  FrontendThemeConfig,
} from "@trebired/frontend/config";

import { token } from "./tokens";

export const semantics = {
  selection: {
    bg: token.colorMix(token.color("gray", 500), "50%"),
    text: token.color("gray", 200),
  },
  status: {
    error: { color: token.color("red", 500) },
    success: { color: token.color("green", 500) },
    warning: { color: token.color("yellow", 500) },
  },
  tone: {
    blue: token.color("blue", 600),
    cyan: token.color("cyan", 600),
    error: token.color("red", 600),
    gray: token.color("gray", 600),
    green: token.color("green", 600),
    info: token.color("blue", 600),
    ink: token.color("gray", 0),
    muted: token.color("gray", 600),
    accent: token.color("clay", 500),
    purple: token.color("ruby", 600),
    red: token.color("red", 600),
    success: token.color("green", 600),
    warning: token.color("yellow", 600),
    yellow: token.color("yellow", 600),
  },
  heading: {
    fontFamily: "\"Fraunces\", Georgia, serif",
    fontWeight: "600",
    letterSpacing: "-0.01em",
  },
  targetMin: "1.5rem",
} satisfies NonNullable<FrontendDesignConfig["semantics"]>;

export const theme = {
  dark: "dark",
  defaultMode: "light",
  light: "light",
  modes: {
    dark: { scheme: "dark" },
    light: { scheme: "light" },
  },
} satisfies FrontendThemeConfig;

export const runtime = {
  progress: {
    color: token.color("gray", 600),
  },
  theme,
} satisfies FrontendRuntimeConfig;
