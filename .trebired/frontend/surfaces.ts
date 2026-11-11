import { semantic, token, ui } from "./tokens";

export const surfaces = {
  brandCanvas: {
    art: {
      border: "1px solid color-mix(in srgb, currentColor 24%, transparent)",
    },
    caption: {
      fontSize: ".8rem",
      gap: "0.75rem",
    },
    clear: {
      space: "2rem",
    },
    guide: {
      border: "1px dashed color-mix(in srgb, currentColor 38%, transparent)",
    },
    measure: {
      color: "color-mix(in srgb, currentColor 62%, transparent)",
      fontSize: "0.68rem",
      offset: "0.75rem",
    },
    root: {
      gap: "0.75rem",
    },
    spec: {
      color: "var(--tbf-text-muted, #666)",
      fontSize: "0.72rem",
    },
    stage: {
      background: "var(--tbf-page, #fff)",
      border: "var(--border-width, 1px) solid color-mix(in srgb, currentColor 14%, transparent)",
      color: "var(--tbf-text, #000)",
      minHeight: "14rem",
      padding: "2.5rem",
      radius: "var(--tbf-radius, 0)",
    },
    tones: {
      accent: {
        background: "var(--tbf-focus, #000)",
        color: "var(--tbf-page, #fff)",
      },
      inverse: {
        background: "var(--tbf-ink, #000)",
        color: "var(--tbf-page, #fff)",
      },
      muted: {
        background: "var(--tbf-surface-muted, #eee)",
        color: "var(--tbf-text, #000)",
      },
    },
  },
  button: {
    root: {
      background: token.color("gray", 900),
      border: token.border(semantic.borderSurface2),
      color: semantic.textColor,
      fontFamily: "var(--tbf-font-sans, \"Inter\", sans-serif)",
      fontSize: "12px",
      fontWeight: "600",
      gap: "8px",
      height: "28px",
      letterSpacing: "var(--tbf-ui-btn-root-letter-spacing, normal)",
      minHeight: "var(--tbf-surf-btn-root-height, var(--tbf-ui-btn-root-height, 28px))",
      padding: "0 12px",
      paddingBlock: "0",
      radius: ui.radiusMd,
      textTransform: "var(--tbf-ui-btn-root-text-transform, none)",
      transition: [
        "var(--tbf-ui-btn-root-transition, background-color var(--tbf-transition-fast, .18s)",
        "var(--tbf-transition-easing, ease), border-color var(--tbf-transition-fast, .18s)",
        "var(--tbf-transition-easing, ease), color var(--tbf-transition-fast, .18s)",
        "var(--tbf-transition-easing, ease))",
      ].join(" "),
      whiteSpace: "var(--tbf-ui-btn-root-white-space, nowrap)",
      width: "var(--tbf-ui-btn-root-width, auto)",
    },
    sizes: {
      lg: {
        fontSize: "13px",
        height: "34px",
        paddingInline: "14px",
      },
      md: {
        fontSize: "12px",
        height: "28px",
        paddingInline: "12px",
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
    },
  },
  card: {
    body: {
      divider: {
        background: semantic.borderSurface1,
      },
    },
    iconRadius: "var(--radius-md, var(--tbf-radius, 0))",
    root: {
      background: semantic.backgroundPage,
      border: token.border(semantic.borderSurface1),
      color: "var(--tbf-text, #000)",
      minHeight: ui.heightXs4,
      padding: "14px 14px 12px 14px",
      radius: ui.radiusLg,
      transition: [
        "background-color var(--tbf-transition-fast, .18s) var(--tbf-transition-easing, ease),",
        "border-color var(--tbf-transition-fast, .18s) var(--tbf-transition-easing, ease), color",
        "var(--tbf-transition-fast, .18s) var(--tbf-transition-easing, ease)",
      ].join(" "),
    },
    row: {
      background: "transparent",
      border: token.border(semantic.borderSurface1),
      padding: "9px 12px",
      radius: ui.radiusLg,
      states: {
        excluded: {
          border: "var(--border-surface-1)",
        },
        hover: {
          background: token.color("gray", 900),
        },
        selected: {
          background: semantic.backgroundSurface1,
        },
      },
    },
    sectionPadding: "var(--tbf-surf-card-root-padding, 12px)",
    sizes: {
      lg: {
        padding: "var(--tbf-gap-lg, 40px)",
      },
      md: {
        padding: "var(--tbf-gap-md, 24px)",
      },
      sm: {
        padding: "var(--tbf-gap-sm, 12px)",
      },
    },
    states: {
      hover: {
        border: "var(--tbf-focus, #000)",
      },
    },
    title: {
      fontSize: "15px",
      fontWeight: "700",
      margin: "0 0 10px 0",
    },
    tones: {
      accent: {
        color: "var(--tbf-page, #fff)",
        states: {
          hover: {
            background: "var(--tbf-ui-card-tone-accent-state-hover-bg, transparent)",
            border: "var(--tbf-ui-card-tone-accent-state-hover-border, currentColor)",
          },
        },
        textMuted: "color-mix(in srgb, currentColor 70%, transparent)",
      },
      inverse: {
        color: "var(--tbf-page, #fff)",
        states: {
          hover: {
            background: "var(--tbf-ui-card-tone-inverse-state-hover-bg, transparent)",
            border: "var(--tbf-ui-card-tone-inverse-state-hover-border, currentColor)",
          },
        },
        textMuted: "color-mix(in srgb, currentColor 62%, transparent)",
      },
      muted: {
        color: "var(--tbf-text, #000)",
        states: {
          hover: {
            background: "var(--tbf-ui-card-tone-muted-state-hover-bg, transparent)",
            border: "var(--tbf-ui-card-tone-muted-state-hover-border, currentColor)",
          },
        },
      },
      surface: {
        background: "var(--tbf-ui-card-tone-surface-bg, var(--tbf-ui-card-root-bg, transparent))",
        border: "var(--tbf-ui-card-tone-surface-border, currentColor)",
        states: {
          hover: {
            background: "var(--tbf-ui-card-tone-surface-state-hover-bg, transparent)",
            border: "var(--tbf-ui-card-tone-surface-state-hover-border, currentColor)",
          },
        },
      },
    },
  },
  hairline: {
    cell: {
      background: "var(--tbf-page, #fff)",
      backgroundInverse: "var(--tbf-ink, #000)",
      color: "var(--tbf-text, #000)",
      colorInverse: "var(--tbf-page, #fff)",
      padding: "var(--tbf-gap-md, 24px)",
      textMuted: "color-mix(in srgb, currentColor 62%, transparent)",
      textMutedInverse: "color-mix(in srgb, currentColor 62%, transparent)",
    },
    motion: {
      duration: "0.3s",
      easing: "ease",
    },
    root: {
      background: "var(--tbf-border, color-mix(in srgb, currentColor 10%, transparent))",
      border: "var(--tbf-border-width, 1px) solid var(--tbf-border, currentColor)",
      gap: "var(--border-width, 1px)",
      min: "16rem",
      radius: "var(--radius-lg, var(--tbf-radius, 0))",
    },
  },
  logo: {
    root: {
      height: "2rem",
      max: "100%",
    },
  },
  motif: {
    root: {
      color: "inherit",
      opacity: "1",
    },
  },
  scrollbar: {
    root: {
      gutter: "stable",
      scheme: "light dark",
      thumb: "auto",
      track: "transparent",
      width: "auto",
    },
  },
  visibility: {
    duration: "320ms",
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
};
