import { defineStore } from "pinia";
import type { ICar } from "~/types/car";

export const useCarsStore = defineStore("car-store", () => {
  const cars = ref<ICar[]>([]);
  const { $api } = useNuxtApp();

  const $add = (car: ICar) => {
    cars.value = [...cars.value, car];
  };

  const $fetch = async () => {
    const data = await $api.cars.get();
    cars.value = data;
  };

  const $remove = (id: string) => {
    cars.value = cars.value.filter((i) => i.id != id);
  };

  return { $add, $remove, cars, $fetch };
});
