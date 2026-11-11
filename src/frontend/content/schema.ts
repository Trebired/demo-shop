import { cmsField, defineContent } from "@trebired/frontend/cms";

const content = defineContent({
    fields: {
      "home.title": cmsField.text({ label: { cs: "Nadpis", en: "Title" }, maxLength: 80, required: true }),
      "home.lead": cmsField.richText({ label: { cs: "Úvod", en: "Introduction" }, marks: ["bold", "italic", "link"] }),
      "checkout.note": cmsField.text({ label: { cs: "Poznámka k objednávce", en: "Checkout note" }, maxLength: 300, multiline: true }),
      "footer.note": cmsField.text({ label: { cs: "Patička", en: "Footer" }, maxLength: 160 }),
    },
});

export { content };
