#!/usr/bin/env bun

import { createEshopAdminClient } from "@trebired/e-shop/client";
import { resolvePrimaryPort } from "@trebired/startup";
import { loadConfig as loadStartupConfig } from "@trebired/startup/config";
import { logger } from "./shared/logger";

type Seed = {
  description: Record<string, string>;
  name: Record<string, string>;
  slug: string;
  variants: { name?: Record<string, string>; price: number; sku: string; stock: number | null; weight: number }[];
};

const PRODUCTS: Seed[] = [
  {
    description: { cs: "Točený hrnek na 300 ml s glazurou v barvě pálené hlíny.", en: "A 300 ml thrown mug glazed in the colour of fired clay." },
    name: { cs: "Hrnek Okr", en: "Okr mug" },
    slug: "hrnek",
    variants: [
      { name: { cs: "Terakota", en: "Terracotta" }, price: 42000, sku: "MUG-TER", stock: 18, weight: 380 },
      { name: { cs: "Mech", en: "Moss" }, price: 42000, sku: "MUG-MOSS", stock: 4, weight: 380 },
    ],
  },
  {
    description: { cs: "Hluboká mísa na polévku nebo ovoce, průměr 18 cm.", en: "A deep bowl for soup or fruit, 18 cm across." },
    name: { cs: "Mísa Les", en: "Forest bowl" },
    slug: "misa",
    variants: [{ price: 56000, sku: "BOWL", stock: 9, weight: 620 }],
  },
  {
    description: { cs: "Mělký talíř s okrajem v barvě okru, průměr 26 cm.", en: "A flat plate with an ochre rim, 26 cm across." },
    name: { cs: "Talíř Okraj", en: "Rim plate" },
    slug: "talir",
    variants: [{ price: 48000, sku: "PLATE", stock: 12, weight: 700 }],
  },
  {
    description: {
      cs: "Vysoká váza točená z červené hlíny, každá trochu jiná.",
      en: "A tall vase thrown from red clay, each one a little different.",
    },
    name: { cs: "Váza Plamen", en: "Flame vase" },
    slug: "vaza",
    variants: [{ price: 89000, sku: "VASE", stock: 3, weight: 900 }],
  },
  {
    description: { cs: "Zápisník A5 s šitou vazbou a 96 listy recyklovaného papíru.", en: "A sewn A5 notebook with 96 sheets of recycled paper." },
    name: { cs: "Zápisník Dílna", en: "Workshop notebook" },
    slug: "zapisnik",
    variants: [{ price: 26000, sku: "NOTE", stock: null, weight: 250 }],
  },
  {
    description: { cs: "Sada šesti pohlednic s motivy z dílny.", en: "A set of six postcards drawn in the workshop." },
    name: { cs: "Pohlednice", en: "Postcards" },
    slug: "pohlednice",
    variants: [{ price: 14000, sku: "CARDS", stock: null, weight: 80 }],
  },
];

const { config: startup } = await loadStartupConfig(process.cwd());
const port = resolvePrimaryPort(startup) || 3000;
const admin = createEshopAdminClient({ baseUrl: `http://127.0.0.1:${port}`, token: String(process.env.ESHOP_ADMIN_TOKEN ?? "") });
const existing = await admin.products({ limit: 1 });

if (existing.total > 0) {
  logger.info("shop.seed", `catalog has ${existing.total} products, nothing to seed`);
} else {
  for (const item of PRODUCTS) {
    const images = [{ alt: item.name.cs ?? "", src: `/media/products/${item.slug}.svg` }];
    const input = { description: item.description, images, name: item.name, slug: item.slug, status: "active", vatRate: 21 };
    const product = (await admin.saveProduct(input)).product;
    for (const [position, variant] of item.variants.entries()) {
      const values = { name: variant.name, position, priceMinor: variant.price, sku: variant.sku, stock: variant.stock, weightGrams: variant.weight };
      await admin.saveVariant(product.id, values);
    }
  }
  logger.success("shop.seed", `added ${PRODUCTS.length} products`);
}
