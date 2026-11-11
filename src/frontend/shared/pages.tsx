import { createSitePages } from "@trebired/frontend/react";
import ErrorPage from "./../pages/error/index";
import { SiteLayout } from "./../components/layout/index";
import { SiteCms } from "./cms";
import { storefront } from "./eshop";

const sitePages = createSitePages({
    error: ErrorPage,
    pages: (route) => storefront.pages(route),
    wrap: (page) => (
      <SiteCms>
      <storefront.Provider>
      <SiteLayout>{page}</SiteLayout>
      </storefront.Provider>
      </SiteCms>
    ),
});

export { sitePages };
