<div align="center">

# Demo Shop

**An e-shop on `@trebired/e-shop`: catalog, cart, checkout, bank transfer with a QR code, optional card payments and Packeta, invoices and customer accounts, run from Operlorn through the shop admin API, with its texts edited through the content management in `@trebired/frontend`.**

[![License](https://img.shields.io/badge/license-MIT-black)](LICENSE)
[![Runtime](https://img.shields.io/badge/runtime-Bun-black)](#install)
[![Database](https://img.shields.io/badge/database-Postgres-black)](#configuration)

</div>

---

## Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [Concepts](#concepts)
- [Configuration](#configuration)
- [Runtime](#runtime)
- [What It Does Not Do](#what-it-does-not-do)

## Install

Bun 1 or later and a Postgres database.

```sh
bun i
```

## Quick Start

```sh
DATABASE_URL=postgres://... ESHOP_ADMIN_TOKEN=<64 hex characters> bun run dev
ESHOP_ADMIN_TOKEN=<the same token> bun run seed
```

`dev` builds the pages, creates the shop tables and serves the shop on port 3000. `seed` adds three products when the catalog is empty.

```sh
bun run build
bun run start
```

## Concepts

### Pages and Shop

The pages are built once into `dist/`, like a static site. `src/bin/server.ts` serves them and mounts the shop, which owns `/eshop/api` for the storefront and `/eshop/admin/api/v1` for Operlorn. Product, order and password reset pages share one built page each, filled from the address in the browser.

### Content

`src/frontend/content/schema.ts` declares the editable texts: the home title and introduction, the note above checkout and the footer. `content/content.json` holds their published values, and Operlorn edits them in place and publishes by committing that file.

### Operlorn

Connecting the shop in Operlorn creates the admin token and puts `ESHOP_ADMIN_TOKEN` and `ESHOP_EVENTS_URL` into the app environment; redeploy the app after connecting. Operlorn then shows the shop's statistics, orders, products and customers, and receives every order change as it happens.

## Configuration

`.trebired/e-shop/config.ts` holds the shop. Optional parts turn on when their variables are set:

- `DATABASE_URL`, `ESHOP_ADMIN_TOKEN` (at least 32 characters): required.
- `PUBLIC_URL`: the shop's public address, needed for card payments, password reset links and order links in email.
- `SMTP_URL`, `SHOP_MAIL_FROM`, `SHOP_MAIL_OPERATOR`: order email.
- `ESHOP_EVENTS_URL`: where order changes are reported; Operlorn sets it.
- `STRIPE_SECRET_KEY` with `STRIPE_WEBHOOK_SECRET`, `GOPAY_GOID` with `GOPAY_CLIENT_ID` and `GOPAY_CLIENT_SECRET`, `COMGATE_MERCHANT` with `COMGATE_SECRET`: card payments, in test mode.
- `PACKETA_API_KEY`, `PACKETA_API_PASSWORD`, `PACKETA_SENDER`: Packeta pickup points.
- `SHOP_IBAN`, `SHOP_COMPANY_ID`: the bank account and company id on payment instructions and invoices.
- `CMS_EDITOR_ORIGINS`: the Operlorn addresses allowed to open the shop in edit mode, read at build time.
- `PORT`: the port, 3000 by default.

## Runtime

`bun run start` serves the built pages and the shop. It creates or updates the shop tables at start and removes idle carts every six hours.

## What It Does Not Do

This app does not:

- take real payments; every gateway runs in its test mode;
- store product images; products point at image addresses served elsewhere.
