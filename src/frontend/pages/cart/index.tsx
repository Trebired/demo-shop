import { Title, useLocale } from "@trebired/frontend/react";
import { CartView } from "@trebired/e-shop/react";
import { createLocalTranslator } from "@trebired/i18n";

function CartPage() {
  const copy = createLocalTranslator(import.meta.url, useLocale().locale);
  return (
    <section className="tbf-column tbf-gap-md">
    <Title level={1}>{copy("title")}</Title>
    <CartView checkoutHref="/checkout" continueHref="/" />
    </section>
  );
}

export default CartPage;
