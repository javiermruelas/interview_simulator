import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        '@': fileURLToPath(new URL('./', import.meta.url))
    }
})