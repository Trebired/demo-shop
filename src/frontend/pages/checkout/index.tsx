import { CmsText } from "@trebired/frontend/cms";
import { Title, useLocale } from "@trebired/frontend/react";
import { CheckoutForm } from "@trebired/e-shop/react";
import { createLocalTranslator } from "@trebired/i18n";
import { TEMPLATE_ROUTES } from "./../../shared/shop";

function CheckoutPage() {
  const copy = createLocalTranslator(import.meta.url, useLocale().locale);
  return (
    <section className="tbf-column tbf-gap-md">
    <Title level={1}>{copy("title")}</Title>
    <CmsText as="p" field="checkout.note" />
    <CheckoutForm
    onPlaced={(order) => {
        if (!order.payment.redirectUrl) window.location.assign(`${TEMPLATE_ROUTES.order}${order.token}`);
    }}
    />
    </section>
  );
}

export default CheckoutPage;
