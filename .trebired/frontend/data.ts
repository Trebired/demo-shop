import { token } from "./tokens";

export const data = {
  graph: {
    download: {
      fill: token.colorMix(token.color("blue", 500), "16%"),
      stroke: token.color("blue", 400),
    },
    heatmap: {
      empty: token.color("gray", 900),
      level1: token.color("green", 800),
      level2: token.color("green", 700),
      level3: token.color("green", 600),
      level4: token.color("green", 500),
    },
    upload: {
      fill: token.colorMix(token.color("green", 500), "16%"),
      stroke: token.color("green", 400),
    },
  },
  log: {
    line: {
      states: {
        hover: {
          background: token.color("gray", 800),
        },
      },
    },
    selection: {
      background: token.color("gray", 700),
    },
  },
};
