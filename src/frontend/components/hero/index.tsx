import { CmsRichText, CmsText } from "@trebired/frontend/cms";

function Hero() {
  return (
    <div className="okr-hero tbf-column tbf-gap-sm">
    <CmsText as="h1" field="home.title" />
    <CmsRichText className="okr-hero__lead" field="home.lead" />
    </div>
  );
}

function CheckoutNote() {
  return <CmsText as="p" className="tbf-text-muted" field="checkout.note" />;
}

export { CheckoutNote, Hero };
