import { defineConfig } from "@trebired/e-shop/config";

const env = (name: string) => String(process.env[name] ?? "").trim();

export default defineConfig({
    forVersion: "0.5.0",
    shop: { currency: "CZK", locales: ["cs", "en"], name: "Demo Shop" },
    vat: { defaultRate: 21 },
    shipping: [
      { id: "pickup", kind: "pickup", label: { cs: "Osobní odběr", en: "Pickup" }, priceMinor: 0 },
      { freeFromMinor: 150000, id: "courier", kind: "courier", label: { cs: "Kurýr", en: "Courier" }, priceMinor: 12900 },
      ...(env("PACKETA_API_KEY") ? [{ id: "packeta", kind: "packeta"as const, label: { cs: "Zásilkovna", en: "Packeta" }, priceMinor: 7900 }] : []),
    ],
    packeta: env("PACKETA_API_KEY") ? { apiKey: env("PACKETA_API_KEY"), sender: env("PACKETA_SENDER") || "demo-shop" } : undefined,
    payments: {
      bankTransfer: { accountName: "Demo Shop", dueDays: 7, iban: env("SHOP_IBAN") || "CZ6508000000192000145399" },
      comgate: env("COMGATE_MERCHANT") ? { merchant: env("COMGATE_MERCHANT"), test: true } : undefined,
      gopay: env("GOPAY_GOID") ? { goid: env("GOPAY_GOID"), sandbox: true } : undefined,
      stripe: env("STRIPE_SECRET_KEY") ? { enabled: true } : undefined,
    },
    invoices: {
      supplier: {
        city: "Brno",
        companyId: env("SHOP_COMPANY_ID") || "00000000",
        country: "Česká republika",
        name: "Demo Shop",
        postalCode: "602 00",
        street: "Ukázková 1",
        vatPayer: false,
      },
    },
    accounts: { resetPath: "/account/reset/{token}" },
    mail: { from: env("SHOP_MAIL_FROM"), operator: env("SHOP_MAIL_OPERATOR") },
    orders: { statusPath: "/order/{token}" },
});
