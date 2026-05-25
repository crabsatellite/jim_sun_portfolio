import { defineConfig } from "astro/config";

const SITE = "https://crabsatellite.github.io";
const BASE = "/jim_sun_portfolio";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  build: {
    assets: "_astro",
  },
});
