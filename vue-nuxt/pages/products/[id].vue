<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="flex items-center max-w-5xl mx-auto">
    <organisms-single-product :id="route.params.id" />
  </div>
</template>