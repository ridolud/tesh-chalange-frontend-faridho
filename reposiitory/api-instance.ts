import type { $Fetch } from "nitropack";
import { CarsModule } from "~/reposiitory/moduls/cars.module";
import { OrdersModule } from "~/reposiitory/moduls/order.module";

export interface IApiInstance {
  cars: CarsModule;
  orders: OrdersModule;
}

export function apiInstanceFactory($fetch: $Fetch): IApiInstance {
  return {
    cars: new CarsModule($fetch),
    orders: new OrdersModule($fetch),
  };
}
