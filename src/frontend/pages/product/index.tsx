import { Text, useLocale, usePageRoute } from "@trebired/frontend/react";
import { ProductDetail, useProduct } from "@trebired/e-shop/react";
import { createLocalTranslator } from "@trebired/i18n";
import { routeTail, SHOP_CURRENCY } from "./../../shared/shop";

function ProductPage() {
  const copy = createLocalTranslator(import.meta.url, useLocale().locale);
  const loaded = useProduct(routeTail(usePageRoute()));
  return (
    <section className="tbf-column tbf-gap-md">
    {loaded.data ? <ProductDetail currency={SHOP_CURRENCY} product={loaded.data.product} /> : null}
    {loaded.error ? <Text muted>{copy("missing")}</Text> : null}
    <a href="/">{copy("back")}</a>
    </section>
  );
}

export default ProductPage;
