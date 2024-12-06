<script lang="ts" setup>
import type { ICar } from "~/types/car";
import { number, object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const { $api } = useNuxtApp();
const carsStore = useCarsStore();

const schema = object({
  name: string().required(),
  day_rate: number().required(),
  month_rate: number().required(),
  image: string().url(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  name: "",
  month_rate: 0,
  day_rate: 0,
  image: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const data = await $api.cars.insert(event.data);
  useToast().add({ title: "Car has been created" });
  carsStore.$add(data);
  navigateTo("/car");
}
</script>

<template>
  <h2 class="text-bold text-xl mb-4">New Car</h2>
  <div class="max-w-80">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Name" name="name">
        <UInput v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Day Rate" name="day_rate">
        <UInput v-model="state.day_rate" type="number" />
      </UFormGroup>

      <UFormGroup label="Month Rate" name="month_rate">
        <UInput v-model="state.month_rate" type="number" />
      </UFormGroup>

      <UFormGroup label="Image Url" name="image">
        <UInput v-model="state.image" />
      </UFormGroup>

      <UButton color="white" @click="navigateTo('/car')"> Back </UButton>
      <UButton type="submit" class="pl-2"> Submit </UButton>
    </UForm>
  </div>
</template>
