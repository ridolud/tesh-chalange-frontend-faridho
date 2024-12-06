<script lang="ts" setup>
import type { TableRow } from "#ui/types";

const { $api } = useNuxtApp();
const ordersStore = useOrderStore();
const { orders } = storeToRefs(ordersStore);

onMounted(() => ordersStore.$fetch());

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "order_date",
    label: "Order Date",
  },
  {
    key: "pickup_date",
    label: "Pickup Date",
  },
  {
    key: "car_id",
    label: "Car Id",
  },
  {
    key: "actions",
  },
];
</script>

<template>
  <div class="flex justify-between mb-4 items-center">
    <h2 class="text-bold text-xl">List Orders</h2>
    <UButton to="/order/add">Add Order</UButton>
  </div>
  <UTable :rows="orders" :columns="columns">
    <template #actions-data="{ row }">
      <UButton size="sm" :to="`order/${row.id}`">Edit</UButton>
      <OrderDelete class="ml-2" :id="row.id" />
    </template>
  </UTable>
</template>
