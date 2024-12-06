import { HttpFactory } from "~/reposiitory/http-factory";
import type { ICar } from "~/types/car";
import type { IOrder } from "~/types/order";

export class OrdersModule extends HttpFactory {
  async get(): Promise<IOrder[]> {
    return this.call("get", "orders");
  }

  async getOne(id: string): Promise<IOrder> {
    return this.call("get", `orders/${id}`);
  }

  async insert(input: any): Promise<IOrder> {
    return this.call("post", "orders", input);
  }

  async upadte(id: string, input: any): Promise<IOrder> {
    return this.call("put", `orders/${id}`, input);
  }

  async delete(id: string): Promise<IOrder> {
    return this.call("delete", `orders/${id}`);
  }
}
