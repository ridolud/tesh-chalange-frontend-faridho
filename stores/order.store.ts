import { defineStore } from "pinia";
import type { IOrder } from "~/types/order";

export const useOrderStore = defineStore("order-store", () => {
  const orders = ref<IOrder[]>([]);
  const { $api } = useNuxtApp();

  const $add = (order: IOrder) => {
    orders.value = [...orders.value, order];
  };

  const $fetch = async () => {
    const data = await $api.orders.get();
    orders.value = data;
  };

  const $remove = (id: string) => {
    orders.value = orders.value.filter((i) => i.id != id);
  };

  return { $add, $remove, orders, $fetch };
});
