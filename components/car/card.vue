<script lang="ts" setup>
import type { ICar } from "~/types/car";

const props = defineProps<{
  car: ICar;
}>();
</script>

<template>
  <UCard
    :ui="{
      body: {
        padding: 'px-0 py-0 sm:p-0',
      },
    }"
  >
    <img :src="car.image" class="h-48" />
    <template #footer>
      <div class="flex justify-between">
        <div>
          <p>{{ car.name }}</p>
          <p class="text-sm">Day Rate: {{ car.day_rate }}</p>
          <p class="text-sm">Month Rate: {{ car.month_rate }}</p>
        </div>
        <div>
          <slot name="action"></slot>
        </div>
      </div>
    </template>
  </UCard>
</template>
