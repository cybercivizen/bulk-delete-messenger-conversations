import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
   use: {
      headless: false
   }
};

export default config;