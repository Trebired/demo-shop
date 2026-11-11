import { emptyCmsDocument, normalizeCmsDocument, type CmsDocument } from "@trebired/frontend/cms";

declare const SITE_CONTENT: string;
declare const SITE_CMS_EDITORS: string;

function parse(): CmsDocument {
  try {
    return normalizeCmsDocument(JSON.parse(SITE_CONTENT));
  } catch {
    return emptyCmsDocument();
  }
}

const siteDocument = parse();
const editorOrigins: string[] = JSON.parse(SITE_CMS_EDITORS);

export { editorOrigins, siteDocument };
