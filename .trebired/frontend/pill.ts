import { token } from "./tokens";

export const primitivePill = {
  background: token.color("gray", 800),
  rootBackground: "var(--tbf-ui-pill-bg, transparent)",
  rootBorder: "var(--tbf-border-width, 1px) solid var(--tbf-border, currentColor)",
  rootColor: "var(--tbf-text, currentColor)",
  rootFontSize: "13px",
  rootGap: "var(--tbf-gap-xs2, 4px)",
  rootPadding: "3px 8px",
  rootRadius: "var(--tbf-radius-sm, .5rem)",
};
