import { semantic, token } from "./tokens";

export const primitiveChoice = {
  checked: {
    background: token.color("gray", 900),
    border: semantic.borderSurface2,
  },
  control: {
    activeIconColor: token.color("gray", 600),
    borderColor: token.color("gray", 600),
    checkedBackground: token.color("gray", 100),
    checkedBorderColor: token.color("gray", 100),
    checkedColor: token.color("gray", 900),
    color: token.color("gray", 800),
    partialBorderColor: token.color("gray", 400),
    partialColor: token.color("gray", 200),
    partialIconColor: token.color("gray", 300),
  },
};
