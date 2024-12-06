// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@vueuse/nuxt"],
  ssr: false,
  pinia: {
    storesDirs: ["./stores/**"],
  },
  runtimeConfig: {
    public: {
      baseApiUrl: "https://67037f39bd7c8c1ccd41a62e.mockapi.io/rent-car/api/v1",
    },
  },
});
