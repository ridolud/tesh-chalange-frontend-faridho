<script lang="ts" setup>
const props = defineProps<{ id: string }>();
const { $api } = useNuxtApp();
const ordersStore = useOrderStore();
const {
  data,
  status,
  refresh: onDelete,
} = useAsyncData(() => $api.orders.delete(props.id), {
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
        ordersStore.$remove(id);
      }
    "
    >Delete</UButton
  >
</template>
