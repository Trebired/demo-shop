import { CmsRichText, CmsText } from "@trebired/frontend/cms";
import { Text, Title, useLocale } from "@trebired/frontend/react";
import { ProductGrid, useCatalog } from "@trebired/e-shop/react";
import { createLocalTranslator } from "@trebired/i18n";
import { SHOP_CURRENCY, TEMPLATE_ROUTES } from "./../../shared/shop";

function HomePage() {
  const copy = createLocalTranslator(import.meta.url, useLocale().locale);
  const catalog = useCatalog();
  const items = catalog.data?.items ?? [];
  return (
    <>
    <section className="tbf-column tbf-gap-md">
    <CmsText as="h1" field="home.title" />
    <CmsRichText field="home.lead" />
    </section>
    <section className="tbf-column tbf-gap-sm">
    <Title level={2}>{copy("products")}</Title>
    {catalog.data && !items.length ? <Text muted>{copy("empty")}</Text> : null}
    <ProductGrid currency={SHOP_CURRENCY} productHref={(product) => `${TEMPLATE_ROUTES.product}${product.slug}`} products={items} />
    </section>
    </>
  );
}

export default HomePage;
