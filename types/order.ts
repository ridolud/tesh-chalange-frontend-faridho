export interface IOrder {
  car_id: string;
  order_date: Date;
  pickup_date: Date;
  dropoff_date: Date;
  pickup_location: string;
  dropoff_location: string;
  id: string;
}

export type OrderInputDTO = Omit<IOrder, "id">;
