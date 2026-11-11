import { semantic } from "./tokens";

export const primitiveTextLink = {
  motion: {
    duration: ".3s",
    easing: "ease",
  },
  root: {
    color: semantic.textMuted,
    decorationUnderlineOffset: ".1875rem",
    fontWeight: "inherit",
    letterSpacing: "normal",
    textDecorationColor: "currentColor",
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
    textDecorationThickness: "1px",
    textTransform: "none",
    textUnderlineOffset: "3px",
    underlineColor: "currentColor",
    underlineGap: "calc(.35em + .375rem)",
    underlineHeight: "max(1px, .0625em)",
    underlineMidline: ".325em",
    underlineRadius: ".3em",
  },
  states: {
    active: {
      color: "var(--tbf-ui-link-state-hover-color, var(--tbf-text, currentColor))",
      underlineColor: "var(--tbf-ui-link-root-underline-color, currentColor)",
    },
    hover: {
      color: semantic.textColor,
      decorationLine: "var(--tbf-ui-link-root-decoration-line, none)",
      textDecorationColor: "currentColor",
      textDecorationStyle: "solid",
    },
  },
};
