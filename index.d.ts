import { IApiInstance } from "./reposiitory/api-instance.ts";

declare module "#app" {
  interface NuxtApp {
    $api: IApiInstance;
  }
}
export {};
