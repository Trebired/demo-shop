import { Title, useLocale } from "@trebired/frontend/react";
import { AccountView } from "@trebired/e-shop/react";
import { createLocalTranslator } from "@trebired/i18n";
import { TEMPLATE_ROUTES } from "./../../shared/shop";

function AccountPage() {
  const copy = createLocalTranslator(import.meta.url, useLocale().locale);
  return (
    <section className="tbf-column tbf-gap-md">
    <Title level={1}>{copy("title")}</Title>
    <AccountView orderHref={(order) => `${TEMPLATE_ROUTES.order}${order.token}`} />
    </section>
  );
}

export default AccountPage;
