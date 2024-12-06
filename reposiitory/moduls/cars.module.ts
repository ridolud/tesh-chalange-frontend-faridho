import { HttpFactory } from "~/reposiitory/http-factory";
import type { ICar } from "~/types/car";

export class CarsModule extends HttpFactory {
  async get(): Promise<ICar[]> {
    return this.call("get", "cars");
  }

  async getOne(id: string): Promise<ICar> {
    return this.call("get", `cars/${id}`);
  }

  async insert(input: Omit<ICar, "id">): Promise<ICar> {
    return this.call("post", "cars", input);
  }

  async upadte(id: string, input: Omit<ICar, "id">): Promise<ICar> {
    return this.call("put", `cars/${id}`, input);
  }

  async delete(id: string): Promise<ICar> {
    return this.call("delete", `cars/${id}`);
  }
}
