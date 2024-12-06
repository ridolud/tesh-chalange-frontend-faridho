<script lang="ts" setup>
import { date, number, object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { format } from "date-fns";
import type { IOrder } from "~/types/order";

const { $api } = useNuxtApp();
const ordersStore = useOrderStore();
const route = useRoute();

const id = computed(() => {
  return route.params["order_id"] as unknown as string;
});

const schema = object({
  car_id: string().required(),
  order_date: date().required(),
  pickup_date: date().required(),
  dropoff_date: date().required(),
  pickup_location: string(),
  dropoff_location: string(),
});

type Schema = InferType<typeof schema>;

const state = ref<Omit<IOrder, "id">>({
  car_id: "",
  order_date: new Date(),
  pickup_date: new Date(),
  dropoff_date: new Date(),
  pickup_location: "",
  dropoff_location: "",
});

onMounted(async () => {
  try {
    const data = await $api.orders.getOne(id.value);
    state.value = { ...data };
  } catch {
    throw showError({ statusCode: 404 });
  }
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const data = await $api.orders.upadte(id.value, event.data);
  useToast().add({ title: "Order has been updated" });
  ordersStore.$add(data);
  navigateTo("/order");
}
</script>

<template>
  <h2 class="text-bold text-xl mb-4">New Car</h2>
  <div class="max-w-80">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Car ID" name="car_id">
        <UInput v-model="state.car_id" />
      </UFormGroup>

      <UFormGroup label="Order Date" name="order_date">
        <UPopover :popper="{ placement: 'bottom-start' }">
          <UButton
            icon="i-heroicons-calendar-days-20-solid"
            :label="format(state.order_date, 'd MMM, yyy')"
          />

          <template #panel="{ close }">
            <DatePicker v-model="state.order_date" is-required @close="close" />
          </template>
        </UPopover>
      </UFormGroup>

      <UFormGroup label="Pickup Date" name="pickup_date">
        <UPopover :popper="{ placement: 'bottom-start' }">
          <UButton
            icon="i-heroicons-calendar-days-20-solid"
            :label="format(state.pickup_date, 'd MMM, yyy')"
          />

          <template #panel="{ close }">
            <DatePicker
              v-model="state.pickup_date"
              is-required
              @close="close"
            />
          </template>
        </UPopover>
      </UFormGroup>

      <UFormGroup label="Picup location" name="pickup_location">
        <UInput v-model="state.pickup_location" />
      </UFormGroup>

      <UFormGroup label="Dropoff location" name="dropoff_location">
        <UInput v-model="state.dropoff_location" />
      </UFormGroup>

      <UButton color="white" @click="navigateTo('/order')"> Back </UButton>
      <UButton type="submit" class="pl-2"> Submit </UButton>
    </UForm>
  </div>
</template>
