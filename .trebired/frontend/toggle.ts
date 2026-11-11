import { token } from "./tokens";

export const primitiveToggle = {
  active: {
    color: token.color("gray", 100),
  },
  motion: {
    duration: "140ms",
    easing: "ease",
  },
  thumb: {
    background: token.color("gray", 400),
  },
  track: {
    background: token.color("gray", 100),
  },
};
