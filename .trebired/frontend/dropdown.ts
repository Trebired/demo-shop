import { token } from "./tokens";

export const primitiveDropdown = {
  arrow: {
    color: token.color("gray", 500),
  },
  menu: {
    background: token.color("gray", 900),
  },
  motion: {
    closeDuration: "240ms",
    duration: "120ms",
    easing: "ease",
  },
  option: {
    states: {
      hover: {
        background: token.color("gray", 800),
      },
      selected: {
        background: token.color("gray", 800),
      },
    },
  },
};
