import { Title, useLocale, usePageRoute } from "@trebired/frontend/react";
import { ResetPasswordForm } from "@trebired/e-shop/react";
import { createLocalTranslator } from "@trebired/i18n";
import { routeTail } from "./../../shared/shop";

function ResetPage() {
  const copy = createLocalTranslator(import.meta.url, useLocale().locale);
  const token = routeTail(usePageRoute());
  return (
    <section className="tbf-column tbf-gap-md">
    <Title level={1}>{copy("title")}</Title>
    {token ? <ResetPasswordForm token={token} /> : null}
    </section>
  );
}

export default ResetPage;
