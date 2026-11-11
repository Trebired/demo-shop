import { serializeCmsDocument } from "@trebired/frontend/cms";
import { readCmsDocument } from "@trebired/frontend/server";
import { CMS_CONTENT_DIR, editorOrigins } from "./../../../.trebired/frontend/cms";
import { storefrontShellPaths } from "@trebired/e-shop";
import { normalizeConfig } from "@trebired/e-shop/config";
import eshopConfig from "./../../../.trebired/e-shop/config";

async function readSiteContent(rootDir: string) {
  const document = await readCmsDocument(`${rootDir}/${CMS_CONTENT_DIR}`);
  const define = {
    SITE_CMS_EDITORS: JSON.stringify(JSON.stringify(editorOrigins())),
    SITE_CONTENT: JSON.stringify(serializeCmsDocument(document)),
  };
  const storefront = normalizeConfig(eshopConfig, { requireForVersion: false }).storefront;
  return { define, paths: storefront ? storefrontShellPaths(storefront) : ["/"] };
}

export { readSiteContent };
