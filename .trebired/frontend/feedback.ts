import { token, ui } from "./tokens";

export const feedback = {
  flash: {
    container: {
      background: token.color("gray", 900),
      border: token.border(token.color("gray", 800), "1px"),
      color: token.color("gray", 100),
      padding: "15px",
      radius: ui.radiusLg,
      shadow: "var(--tbf-shadow, none)",
    },
    intents: {
      error: {
        iconColor: token.color("red", 500),
      },
      info: {
        iconColor: token.color("gray", 500),
      },
      success: {
        iconColor: token.color("green", 500),
      },
      warn: {
        iconColor: token.color("yellow", 500),
      },
    },
    layout: {
      actionsGap: "8px",
      bodyGap: "8px",
      gap: "10px",
    },
    placement: {
      maxWidth: "520px",
      offset: "18px",
    },
    slotIcon: "currentColor",
    slots: {
      description: {
        color: token.color("gray", 400),
        fontSize: "0.92rem",
      },
      icon: {
        fontWeight: "700",
        size: "18px",
      },
      progress: {
        color: token.color("gray", 600),
        height: "4px",
      },
      title: {
        color: "currentColor",
        fontWeight: "400",
      },
    },
  },
};
