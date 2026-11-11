#!/usr/bin/env bun

import express from "express";
import path from "node:path";
import pg from "pg";
import { loadConfig } from "@trebired/e-shop/config";
import { createEshop } from "@trebired/e-shop/server";
import { resolvePrimaryPort } from "@trebired/startup";
import { loadConfig as loadStartupConfig } from "@trebired/startup/config";
import { logger } from "./shared/logger";

const DIST = path.resolve(process.cwd(), "dist");
const NOT_FOUND = path.join(DIST, "404.html");

function env(name: string): string {
  return String(process.env[name] ?? "").trim();
}

function gatewaySecrets() {
  return {
    ...(env("STRIPE_SECRET_KEY") ? { stripe: { secretKey: env("STRIPE_SECRET_KEY"), webhookSecret: env("STRIPE_WEBHOOK_SECRET") } } : {}),
    ...(env("GOPAY_CLIENT_ID") ? { gopay: { clientId: env("GOPAY_CLIENT_ID"), clientSecret: env("GOPAY_CLIENT_SECRET") } } : {}),
    ...(env("COMGATE_SECRET") ? { comgate: { secret: env("COMGATE_SECRET") } } : {}),
    ...(env("BTCPAY_API_KEY") ? { btcpay: { apiKey: env("BTCPAY_API_KEY"), webhookSecret: env("BTCPAY_WEBHOOK_SECRET") } } : {}),
  };
}

async function startServer(): Promise<void> {
  const { config } = await loadConfig(process.cwd());
  const pool = new pg.Pool({ connectionString: env("DATABASE_URL") });
  const eshop = createEshop({
      adminToken: env("ESHOP_ADMIN_TOKEN"),
      config,
      eventsUrl: env("ESHOP_EVENTS_URL"),
      gateways: gatewaySecrets(),
      packeta: env("PACKETA_API_PASSWORD") ? { apiPassword: env("PACKETA_API_PASSWORD") } : undefined,
      pool,
      publicUrl: env("PUBLIC_URL"),
      smtpUrl: env("SMTP_URL"),
      storefrontDir: DIST,
  });
  const applied = await eshop.migrate();
  if (applied.length) logger.info("shop.migrate", `applied ${applied.join(", ")}`);
  const app = express();
  app.disable("x-powered-by");
  app.use(eshop.handle);
  app.use(express.static(DIST, { index: false, redirect: false }));
  app.use((_req, res) => res.status(404).sendFile(NOT_FOUND));
  const { config: startup } = await loadStartupConfig(process.cwd());
  const port = resolvePrimaryPort(startup) || 3000;
  app.listen(port, () => logger.success("shop.server", `http://localhost:${port}`));
  setInterval(() => void eshop.pruneCarts().catch (() => undefined), 6 * 60 * 60 * 1000).unref();
}

if (import.meta.main) await startServer();

export { startServer };
