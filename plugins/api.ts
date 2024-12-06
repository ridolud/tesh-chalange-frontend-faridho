import { apiInstanceFactory } from "~/reposiitory/api-instance";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const fetch = $fetch.create({
    baseURL: config.public.baseApiUrl,
  });
  const api = apiInstanceFactory(fetch);
  nuxtApp.provide("api", api);
});
