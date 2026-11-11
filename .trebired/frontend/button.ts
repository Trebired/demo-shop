import { semantic, token, ui } from "./tokens";

export const primitiveButton = {
  root: {
    background: token.color("gray", 900),
    border: token.border(semantic.borderSurface2),
    color: semantic.textColor,
    fontSize: "14px",
    fontWeight: "600",
    gap: "8px",
    height: "40px",
    letterSpacing: "normal",
    padding: "0 18px",
    paddingBlock: "0",
    radius: ui.radiusMd,
    textTransform: "none",
    whiteSpace: "nowrap",
    width: "auto",
  },
  sizes: {
    lg: {
      fontSize: "13px",
      height: "34px",
      paddingInline: "14px",
    },
    md: {
      fontSize: "14px",
      height: "40px",
      paddingInline: "18px",
    },
    sm: {
      fontSize: "11px",
      height: "24px",
      paddingInline: "9px",
    },
  },
  slots: {
    icon: {
      color: token.color("gray", 300),
      fontSize: "15px",
      radius: "var(--tbf-ui-btn-root-radius, var(--radius-md, var(--tbf-radius, 0)))",
      size: "28px",
      sizes: {
        lg: {
          fontSize: "18px",
          size: "34px",
        },
        md: {
          fontSize: "16px",
          size: "30px",
        },
        sm: {
          fontSize: "14px",
          size: "26px",
        },
        xs: {
          fontSize: "12px",
          size: "22px",
        },
        xs2: {
          fontSize: "10px",
          size: "18px",
        },
      },
    },
  },
  states: {
    disabled: {
      opacity: "0.55",
    },
    hover: {
      background: token.color("gray", 800),
      borderColor: token.color("gray", 700),
      color: token.color("gray", 200),
      iconColor: "currentColor",
    },
  },
  tones: {
    green: {
      borderInlineColor: token.color("green", 700),
      states: {
        hover: {
          background: token.color("green", 800),
          borderColor: token.color("green", 700),
          color: token.modeColor("gray", 0, "dark"),
          iconColor: "currentColor",
        },
      },
    },
    highlight: {
      background: token.color("gray", 100),
      borderColor: token.color("gray", 100),
      color: token.color("gray", 950),
      iconColor: token.color("gray", 800),
      states: {
        hover: {
          background: token.color("gray", 200),
          borderColor: token.color("gray", 100),
          color: token.color("gray", 900),
          iconColor: "currentColor",
        },
      },
    },
    red: {
      borderInlineColor: token.color("red", 700),
      states: {
        hover: {
          background: token.color("red", 800),
          borderColor: token.color("red", 700),
          color: token.modeColor("gray", 50, "dark"),
          iconColor: "currentColor",
        },
      },
    },
    yellow: {
      borderInlineColor: token.color("yellow", 700),
      states: {
        hover: {
          background: token.color("yellow", 700),
          borderColor: token.color("yellow", 600),
          color: token.modeColor("gray", 50, "dark"),
          iconColor: "currentColor",
        },
      },
    },
  },
  variants: {
    chrome: {
      bg: "transparent",
      border: "color-mix(in srgb, currentColor 24%, transparent)",
      color: "currentColor",
      fontSize: "0.78125rem",
      height: "2rem",
      icon: "currentColor",
      padding: "0 0.625rem",
      radius: "var(--tbf-ui-btn-root-radius, var(--radius-md, var(--tbf-radius, 0)))",
      states: {
        hover: {
          background: "color-mix(in srgb, currentColor 8%, transparent)",
          border: "color-mix(in srgb, currentColor 42%, transparent)",
          color: "currentColor",
          icon: "currentColor",
        },
      },
    },
    primary: {
      background: token.color("clay", 500),
      border: token.color("clay", 500),
      color: token.color("gray", 1000),
      icon: "currentColor",
      states: {
        hover: {
          background: token.color("clay", 600),
          border: token.color("clay", 600),
          color: token.color("gray", 1000),
          icon: "currentColor",
        },
      },
    },
    secondary: {
      background: "transparent",
      border: semantic.borderSurface1,
      color: semantic.textColor,
      icon: token.color("gray", 300),
      states: {
        hover: {
          background: token.color("gray", 900),
          border: semantic.borderSurface2,
          color: token.color("gray", 200),
          icon: "currentColor",
        },
      },
    },
  },
};
