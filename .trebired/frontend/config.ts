import { defineConfig } from "@trebired/frontend/config";

import { CMS_CONTENT_DIR, editorOrigins } from "./cms";
import { components } from "./components";
import { palette } from "./palette";
import { systems } from "./systems";
import { runtime, semantics } from "./theme";

export default defineConfig({
    forVersion: "30.2.0",
    assets: {
      fonts: {
        families: {
          display: {
            family: "Fraunces",
            package: "fraunces",
            styles: ["normal", "italic"],
            subsets: ["latin", "latin-ext"],
            weights: [400, 600],
          },
          sans: {
            family: "Figtree",
            package: "figtree",
            subsets: ["latin", "latin-ext"],
            weights: [400, 500, 600, 700],
          },
        },
        sans: "\"Figtree\", system-ui, sans-serif",
      },
      icons: {
        endpoint: "/__icons/svg",
        packs: ["remixicon"],
      },
    },
    cms: {
      contentDir: CMS_CONTENT_DIR,
      editorOrigins: editorOrigins(),
      enabled: true,
    },
    components,
    design: {
      interactions: { activePress: { enabled: true } },
      palette,
      scales: { radius: { lg: 18, md: 12, sm: 8, xl: 24, xl2: 32, xs: 6 } },
      semantics,
    },
    runtime,
    systems,
});
