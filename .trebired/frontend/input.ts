import { token } from "./tokens";

export const primitiveInput = {
  file: {
    button: {
      background: token.color("gray", 700),
      states: {
        hover: {
          background: token.color("gray", 700),
        },
      },
    },
  },
  rootFontSize: "14px",
  rootPadding: "7px 9px",
  sizes: {
    lgFontSize: "15px",
    lgHeight: "40px",
    lgPadding: "9px 12px",
    sm: {
      fontSize: "13px",
      height: "24px",
      padding: "5px 8px",
    },
  },
  states: {
    focus: {
      color: token.color("gray", 600),
    },
  },
};
