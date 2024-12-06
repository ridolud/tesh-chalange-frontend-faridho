<script lang="ts" setup>
const props = defineProps<{ id: string }>();
const { $api } = useNuxtApp();
const carsStore = useCarsStore();
const {
  data,
  status,
  refresh: onDelete,
} = useAsyncData(() => $api.cars.delete(props.id), {
  server: false,
  immediate: false,
});
</script>

<template>
  <UButton
    size="sm"
    color="red"
    :loading="status == 'pending'"
    @click="
      () => {
        onDelete();
        carsStore.$remove(id);
      }
    "
    >Delete</UButton
  >
</template>
