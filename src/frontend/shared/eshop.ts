import { eshopStorefront } from "@trebired/e-shop/react";
import eshopConfig from "./../../../.trebired/e-shop/config";
import { CheckoutNote, Hero } from "./../components/hero/index";

const storefront = eshopStorefront(eshopConfig, {
    slots: {
      catalog: { before: Hero },
      checkout: { before: CheckoutNote },
    },
});

export { storefront };
