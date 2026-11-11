#!/usr/bin/env bun

import { createEshopAdminClient } from "@trebired/e-shop/client";
import { resolvePrimaryPort } from "@trebired/startup";
import { loadConfig as loadStartupConfig } from "@trebired/startup/config";
import { logger } from "./shared/logger";

const PRODUCTS = [
  { name: { cs: "Keramický hrnek", en: "Ceramic mug" }, price: 34900, sku: "MUG", slug: "hrnek", stock: 25, weight: 400 },
  { name: { cs: "Plátěná taška", en: "Canvas bag" }, price: 29900, sku: "BAG", slug: "taska", stock: 40, weight: 150 },
  { name: { cs: "Zápisník A5", en: "A5 notebook" }, price: 19900, sku: "NOTE", slug: "zapisnik", stock: null, weight: 250 },
];

const { config: startup } = await loadStartupConfig(process.cwd());
const port = resolvePrimaryPort(startup) || 3000;
const admin = createEshopAdminClient({ baseUrl: `http://127.0.0.1:${port}`, token: String(process.env.ESHOP_ADMIN_TOKEN ?? "") });
const existing = await admin.products({ limit: 1 });

if (existing.total > 0) {
  logger.info("shop.seed", `catalog has ${existing.total} products, nothing to seed`);
} else {
  for (const item of PRODUCTS) {
    const product = (await admin.saveProduct({ name: item.name, slug: item.slug, status: "active", vatRate: 21 })).product;
    await admin.saveVariant(product.id, { priceMinor: item.price, sku: item.sku, stock: item.stock, weightGrams: item.weight });
  }
  logger.success("shop.seed", `added ${PRODUCTS.length} products`);
}
