import { Title, useLocale, usePageRoute } from "@trebired/frontend/react";
import { OrderStatus } from "@trebired/e-shop/react";
import { createLocalTranslator } from "@trebired/i18n";
import { routeTail } from "./../../shared/shop";

function OrderPage() {
  const copy = createLocalTranslator(import.meta.url, useLocale().locale);
  const token = routeTail(usePageRoute());
  return (
    <section className="tbf-column tbf-gap-md">
    <Title level={1}>{copy("title")}</Title>
    {token ? <OrderStatus token={token} /> : null}
    </section>
  );
}

export default OrderPage;
