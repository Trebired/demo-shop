import { semantic, token, ui } from "./tokens";

export const overlays = {
  modal: {
    backdrop: {
      background: token.colorMix(token.color("gray", 1000), "48%"),
      blur: "8px",
      opacity: "1",
      padding: "24px",
    },
    content: {
      background: semantic.backgroundPage,
      border: token.border(semantic.borderSurface1),
      color: semantic.textColor,
      maxHeight: "min(80vh, 720px)",
      padding: "20px",
      radius: ui.radiusLg,
      shadow: token.variable("shadow-overlay-lg"),
      width: "min(720px, calc(100vw - 48px))",
    },
    motion: {
      duration: ui.transitionFast,
      easing: "ease",
      initialScale: "0.96",
      openScale: "1",
    },
  },
  popover: {
    group: {
      border: "var(--tbf-border-width, 1px) solid color-mix(in srgb, currentColor 12%, transparent)",
      color: "color-mix(in srgb, var(--tbf-text, currentColor) 72%, transparent)",
      fontSize: ".85rem",
      fontWeight: "800",
      gap: "8px",
      hoverColor: "var(--tbf-text, currentColor)",
      indicatorOffset: "0",
      padding: "11px 12px 9px",
      radius: "var(--tbf-radius-sm, 0)",
    },
    item: {
      root: {
        background: "transparent",
        border: "0",
        color: "var(--tbf-text-muted, currentColor)",
        gap: "10px",
        height: "35px",
        padding: "5px 10px",
        radius: ui.radiusSm,
      },
      stacked: {
        gap: "2px",
        metaColor: "inherit",
        metaFontSize: ".72rem",
        paddingBlock: "6px",
        titleFontSize: ".85rem",
        titleFontWeight: "800",
      },
      state: {
        hover: {
          color: "var(--tbf-text, currentColor)",
        },
        selected: {
          color: "var(--tbf-text, currentColor)",
        },
      },
      states: {
        hover: {
          background: token.color("gray", 800),
        },
        selected: {
          background: token.color("gray", 800),
        },
      },
    },
    panel: {
      background: semantic.backgroundSurface1,
      border: token.border(semantic.borderSurface1),
      color: semantic.textColor,
      gap: "2px",
      gutter: "1.5rem",
      "max-w": "20rem",
      minW: "13.75rem",
      padding: "8px",
      radius: ui.radiusLg,
      shadow: "var(--tbf-shadow, 0 0 0 1px #000)",
    },
    trigger: {
      indicator: {
        display: "none",
        size: "0.4rem",
      },
    },
  },
  tooltip: {
    motion: {
      duration: "170ms",
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
    panel: {
      background: semantic.backgroundSurface1,
      border: token.border(semantic.borderSurface1),
      color: semantic.textColor,
      fontFamily: ui.fontSans,
      fontSize: "12px",
      lineHeight: "1.3",
      padding: "7px 9px",
      radius: ui.radiusMd,
      shadow: "var(--tbf-shadow, 0 8px 24px rgba(0, 0, 0, .12))",
    },
  },
};
