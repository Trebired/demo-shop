import { CmsText } from "@trebired/frontend/cms";
import { button, Text, useLocale } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";
import { Fragment, type ReactNode } from "react";
import { storefront } from "./../../shared/eshop";
import { LANG_ROUTING } from "./../../shared/routing";

function LanguageButtons() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="tbf-inline-row tbf-gap-xs tbf-width-fit">
    {LANG_ROUTING.locales.map((code) => (
          <Fragment key={code}>
          {button({ active: code === locale, children: code.toUpperCase(), onClick: () => setLocale(code), size: "sm", variant: "secondary" })}
          </Fragment>
    ))}
    </div>
  );
}

function SiteLayout(props: { children: ReactNode }) {
  const copy = createLocalTranslator(import.meta.url, useLocale().locale);
  return (
    <div className="tbf-inline-row tbf-hor-center tbf-padding-md">
    <div className="tbf-column tbf-gap-xl tbf-width-xl5">
    <div className="okr-header tbf-inline-row tbf-gap-md tbf-wrap tbf-between tbf-ver-center">
    <a className="okr-brand" href={storefront.href("catalog")}>Okrová dílna</a>
    <nav className="tbf-inline-row tbf-gap-md tbf-wrap tbf-ver-center tbf-width-fit">
    <a href={storefront.href("catalog")}>{copy("nav.home")}</a>
    <a href={storefront.href("account")}>{copy("nav.account")}</a>
    <storefront.CartLink />
    <LanguageButtons />
    </nav>
    </div>
    <main className="tbf-column tbf-gap-xl">{props.children}</main>
    <footer className="okr-footer tbf-column tbf-gap-xs">
    <span className="okr-brand okr-brand--small">Okrová dílna</span>
    <Text muted size="sm">{copy("address")}</Text>
    <Text muted size="sm"><CmsText field="footer.note" /></Text>
    </footer>
    </div>
    </div>
  );
}

export { SiteLayout };
