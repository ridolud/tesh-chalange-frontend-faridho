import type { $Fetch } from "nitropack";

export class HttpFactory {
  constructor(private $fetch: $Fetch) {}

  async call<T>(
    method: string,
    path: string,
    body?: any,
    query?: any,
    options?: any
  ): Promise<T> {
    return this.$fetch(path, {
      method: method,
      body: body,
      query: query,
      ...options,
    });
  }
}
