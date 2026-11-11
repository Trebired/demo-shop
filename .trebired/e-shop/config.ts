import { defineConfig } from "@trebired/e-shop/config";

const env = (name: string) => String((globalThis as { process?: { env?: Record<string, string> } }).process?.env?.[name] ?? "").trim();

export default defineConfig({
    forVersion: "0.6.1",
    shop: { currency: "CZK", locales: ["cs", "en"], name: "Okrová dílna" },
    storefront: { catalog: { categories: true, pageSize: 12 } },
    vat: { defaultRate: 21 },
    shipping: [
      { id: "pickup", kind: "pickup", label: { cs: "Osobní odběr", en: "Pickup" }, priceMinor: 0 },
      { freeFromMinor: 150000, id: "courier", kind: "courier", label: { cs: "Kurýr", en: "Courier" }, priceMinor: 12900 },
      ...(env("PACKETA_API_KEY") ? [{ id: "packeta", kind: "packeta"as const, label: { cs: "Zásilkovna", en: "Packeta" }, priceMinor: 7900 }] : []),
    ],
    packeta: env("PACKETA_API_KEY") ? { apiKey: env("PACKETA_API_KEY"), sender: env("PACKETA_SENDER") || "demo-shop" } : undefined,
    payments: {
      bankTransfer: { accountName: "Okrová dílna", dueDays: 7, iban: env("SHOP_IBAN") || "CZ6508000000192000145399" },
      btcpay: env("BTCPAY_SERVER_URL") ? { serverUrl: env("BTCPAY_SERVER_URL"), storeId: env("BTCPAY_STORE_ID") } : undefined,
      comgate: env("COMGATE_MERCHANT") ? { merchant: env("COMGATE_MERCHANT"), test: true } : undefined,
      gopay: env("GOPAY_GOID") ? { goid: env("GOPAY_GOID"), sandbox: true } : undefined,
      stripe: env("STRIPE_SECRET_KEY") ? { enabled: true } : undefined,
    },
    invoices: {
      supplier: {
        city: "Brno",
        companyId: env("SHOP_COMPANY_ID") || "00000000",
        country: "Česká republika",
        name: "Okrová dílna",
        postalCode: "602 00",
        street: "Ukázková 1",
        vatPayer: false,
      },
    },
    accounts: {},
    mail: { from: env("SHOP_MAIL_FROM"), operator: env("SHOP_MAIL_OPERATOR") },
});
