<script setup lang="ts">
import useSharedData from "../composables/useSharedData";
const { categories } = useSharedData();
</script>

<template>
  <div className="flex flex-col w-full items-center justify-between gap-8">
    <organisms-products-flow 
      v-for="(item, index) in categories"
      :key="index"
      v-bind="item"
      :url="item.path"
      :limit="4"
    />
  </div>
</template>