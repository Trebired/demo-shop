import { token } from "./tokens";

export const primitiveProgress = {
  color: token.color("gray", 400),
  motion: {
    duration: "180ms",
    easing: "ease",
    slideDuration: "1.05s",
  },
  track: token.colorMix(token.color("gray", 400), "22%"),
};
