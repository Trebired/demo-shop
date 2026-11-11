import { semantic, token, ui } from "./tokens";

export const primitiveTabs = {
  list: {
    gap: "0.5rem",
  },
  motion: {
    duration: "290ms",
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    offset: "8px",
  },
  nestedIndicatorColor: "var(--tbf-text-muted, currentColor)",
  responsive: {
    mobile: {
      fontSize: "0.8125rem",
      height: "2.25rem",
    },
  },
  root: {
    background: "transparent",
    border: token.border(semantic.borderSurface1),
    color: semantic.textColor,
    fontFamily: ui.fontSans,
    fontSize: "14px",
    fontWeight: "inherit",
    height: "34px",
    paddingInline: "14px",
    radius: ui.radiusSm,
  },
  states: {
    active: {
      background: semantic.backgroundSurface1,
      borderColor: semantic.borderSurface1,
      color: "var(--tbf-text, currentColor)",
    },
    hover: {
      background: semantic.backgroundSurface1,
      borderColor: semantic.borderSurface1,
      color: "var(--tbf-text, currentColor)",
    },
  },
};
