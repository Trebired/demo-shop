import { semantic, token, ui } from "./tokens";

export const primitiveUpload = {
  actions: {
    gap: ui.gapSm,
  },
  content: {
    gap: ui.gapSm,
  },
  cropper: {
    actions: {
      gap: ui.gapSm,
    },
    description: {
      color: semantic.textMuted,
    },
    header: {
      gap: "4px",
    },
    modal: {
      maxHeight: "min(90vh, 920px)",
      width: "min(960px, calc(100vw - 40px))",
    },
    rootGap: "var(--tbf-gap-md, 12px)",
    stage: {
      background: semantic.backgroundSurface1,
      border: token.border(semantic.borderSurface1),
      faceColor: token.colorMix(token.color("gray", 0), "14%"),
      guideWidth: "1px",
      height: "min(62vh, 640px)",
      lineColor: token.color("gray", 0),
      lineContrastColor: token.color("gray", 1000),
      lineWidth: "1px",
      minHeight: "320px",
      overlayColor: token.colorMix(token.color("gray", 1000), "72%"),
      pointBackground: token.color("gray", 0),
      pointBorder: token.border(token.color("gray", 1000), "1px"),
      pointInset: "0",
      pointRadius: ui.radiusSm,
      pointSize: "12px",
      radius: ui.radiusLg,
    },
  },
  filename: {
    fontSize: "0.95rem",
    lineHeight: "1.15",
  },
  hint: {
    color: semantic.textMuted,
    fontSize: "0.92rem",
    lineHeight: "1.15",
  },
  list: {
    gap: "4px",
    maxHeight: "5.25rem",
    paddingLeft: "18px",
  },
  meta: {
    gap: "0.5rem",
  },
  preview: {
    background: semantic.backgroundSurface2,
    border: token.border(semantic.borderSurface1),
    emptyColor: semantic.textMuted,
    emptyFontSize: "0.82rem",
    emptyLineHeight: "1.1",
    emptyPadding: "4px",
    radius: ui.radiusLg,
    roundRadius: "999px",
    size: "64px",
  },
  responsive: {
    mobile: {
      actionsGap: "0.25rem",
      cropperModalMaxHeight: "calc(100vh - 24px)",
      cropperModalWidth: "calc(100vw - 24px)",
      cropperStageHeight: "min(52vh, 420px)",
      cropperStageMinHeight: "260px",
      surfaceGap: "0.5rem",
      surfacePadding: "0.5rem",
    },
  },
  root: {
    color: semantic.textColor,
    gap: ui.gapSm,
  },
  surface: {
    background: semantic.backgroundSurface1,
    border: token.border(semantic.borderSurface1),
    color: semantic.textColor,
    gap: "12px",
    minHeight: "72px",
    padding: "12px",
    radius: ui.radiusLg,
    states: {
      drag: {
        background: semantic.backgroundSurface2,
        borderColor: semantic.focusColor,
        shadow: "0 0 0 2px var(--tbf-focus, #000)",
      },
      dropBorderStyle: "dashed",
      hasFiles: {
        borderStyle: "solid",
      },
    },
    transition: "border-color .14s ease, background .14s ease, box-shadow .14s ease",
  },
};
