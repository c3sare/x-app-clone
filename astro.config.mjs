// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  output: "server",
  server: {
    port: 3000,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl"],
    routing: "manual",
  },
  experimental: {
    serverIslands: true,
  },
});
