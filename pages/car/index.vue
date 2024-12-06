<script lang="ts" setup>
import type { TableRow } from "#ui/types";

const { $api } = useNuxtApp();
const carsStore = useCarsStore();
const { cars } = storeToRefs(carsStore);

onMounted(() => carsStore.$fetch());
</script>

<template>
  <div class="flex justify-between mb-4 items-center">
    <h2 class="text-bold text-xl">List Cars</h2>
    <UButton to="/car/add">Add New Car</UButton>
  </div>
  <div class="grid grid-cols-3 gap-2">
    <CarCard v-for="car in cars" :key="car.id" :car="car">
      <template #action>
        <UButton size="sm" :to="`/car/${car.id}`">Edit</UButton>
        <CarDelete :id="car.id" class="ml-2" />
      </template>
    </CarCard>
  </div>
</template>
