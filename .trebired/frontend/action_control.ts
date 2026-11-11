export const primitiveActionControl = {
  rootBackground: "var(--tbf-ui-btn-root-bg, transparent)",
  rootBorder: "var(--tbf-ui-btn-root-border, var(--tbf-border-width, 1px) solid var(--tbf-border, currentColor))",
  rootColor: "var(--tbf-ui-btn-root-color, var(--tbf-text, currentColor))",
  rootFontFamily: "var(--tbf-font-sans, \"Inter\", sans-serif)",
  rootFontSize: "var(--tbf-ui-btn-root-font-size, 12px)",
  rootFontWeight: "var(--tbf-ui-btn-root-font-weight, 600)",
  rootGap: "var(--tbf-ui-btn-root-gap, 8px)",
  rootHeight: "var(--tbf-ui-btn-root-height, 28px)",
  rootMinHeight: "var(--tbf-ui-action-root-height, var(--tbf-ui-btn-root-height, 28px))",
  rootPadding: "var(--tbf-ui-btn-root-padding, 0 12px)",
  rootPaddingBlock: "var(--tbf-ui-btn-root-py, 0)",
  rootRadius: "var(--tbf-ui-btn-root-radius, var(--radius-md, var(--tbf-radius, 0)))",
  slotIcon: "var(--tbf-ui-btn-slot-icon, currentColor)",
  states: {
    disabledOpacity: "var(--tbf-ui-btn-state-disabled-opacity, .55)",
    hover: {
      background: "var(--tbf-ui-btn-state-hover-bg, var(--tbf-ui-btn-root-bg, transparent))",
      border: "var(--tbf-ui-btn-state-hover-border, currentColor)",
      color: "var(--tbf-ui-btn-state-hover-color, currentColor)",
      icon: "var(--tbf-ui-btn-state-hover-icon, currentColor)",
    },
  },
  tones: {
    highlight: {
      background: "var(--tbf-ui-btn-tone-highlight-bg, var(--tbf-ui-btn-root-bg, transparent))",
      border: "var(--tbf-ui-btn-tone-highlight-border, currentColor)",
      color: "var(--tbf-ui-btn-tone-highlight-color, currentColor)",
      icon: "var(--tbf-ui-btn-tone-highlight-icon, currentColor)",
      states: {
        hover: {
          background: [
            "var(--tbf-ui-btn-tone-highlight-state-hover-bg, var(--tbf-ui-btn-state-hover-bg,",
            "var(--tbf-ui-btn-root-bg, transparent)))",
          ].join(" "),
          border: "var(--tbf-ui-btn-tone-highlight-state-hover-border, currentColor)",
          color: "var(--tbf-ui-btn-tone-highlight-state-hover-color, currentColor)",
          icon: "var(--tbf-ui-btn-tone-highlight-state-hover-icon, currentColor)",
        },
      },
    },
  },
};
