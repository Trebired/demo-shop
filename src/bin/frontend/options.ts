import { serializeCmsDocument } from "@trebired/frontend/cms";
import { readCmsDocument } from "@trebired/frontend/server";
import { CMS_CONTENT_DIR, editorOrigins } from "./../../../.trebired/frontend/cms";
import { STATIC_ROUTES, templatePaths } from "./../../frontend/shared/shop";

async function readSiteContent(rootDir: string) {
  const document = await readCmsDocument(`${rootDir}/${CMS_CONTENT_DIR}`);
  const define = {
    SITE_CMS_EDITORS: JSON.stringify(JSON.stringify(editorOrigins())),
    SITE_CONTENT: JSON.stringify(serializeCmsDocument(document)),
  };
  return { define, paths: [...STATIC_ROUTES, ...templatePaths()] };
}

export { readSiteContent };
