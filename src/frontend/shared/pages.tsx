import { useLocale } from "@trebired/frontend/react";
import { createSitePages } from "@trebired/frontend/react";
import { EshopProvider } from "@trebired/e-shop/react";
import type { ReactNode } from "react";
import ErrorPage from "./../pages/error/index";
import { SiteLayout } from "./../components/layout/index";
import { SiteCms } from "./cms";
import { SHOP_BASE, TEMPLATE_ROUTES } from "./shop";

const PAGES: Record<string, () => Promise<unknown>> = {
  "/": () => import("./../pages/home/index"),
  "/account": () => import("./../pages/account/index"),
  "/cart": () => import("./../pages/cart/index"),
  "/checkout": () => import("./../pages/checkout/index"),
};

function loaderFor(route: string) {
  if (PAGES[route]) return PAGES[route];
  if (route.startsWith(TEMPLATE_ROUTES.reset)) return () => import("./../pages/reset/index");
  if (route.startsWith(TEMPLATE_ROUTES.product)) return () => import("./../pages/product/index");
  if (route.startsWith(TEMPLATE_ROUTES.order)) return () => import("./../pages/order/index");
  return undefined;
}

function Shop(props: { children: ReactNode }) {
  return <EshopProvider basePath={SHOP_BASE} locale={useLocale().locale || "cs"}>{props.children}</EshopProvider>;
}

const sitePages = createSitePages({
    error: ErrorPage,
    pages: (route) => {
      const load = loaderFor(route);
      return load ? async() => ((await load()) as { default: () => ReactNode }).default : undefined;
    },
    wrap: (page) => (
      <SiteCms>
      <Shop>
      <SiteLayout>{page}</SiteLayout>
      </Shop>
      </SiteCms>
    ),
});

export { sitePages };
