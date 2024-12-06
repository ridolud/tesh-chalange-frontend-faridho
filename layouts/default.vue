<script lang="ts" setup>
const menu = [
  [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Cars",
      to: "car",
    },
    {
      label: "Orders",
      to: "/order",
    },
  ],
];
</script>

<template>
  <header>
    <UContainer>
      <div
        class="w-full flex justify-between items-center py-4 mb-2 border-b dark:border-gray-800"
      >
        <h1 class="text-bold text-xl">Simple App</h1>
        <div>
          <UHorizontalNavigation :links="menu" />
        </div>
      </div>
    </UContainer>
  </header>
  <UContainer>
    <slot />
  </UContainer>
</template>
