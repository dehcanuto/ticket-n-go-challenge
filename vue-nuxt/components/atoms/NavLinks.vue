<script setup lang="ts">
defineProps({
    title: String,
    path: String,
});
</script>
<template>
    <nuxt-link :to="path" class="hover:text-gray-200">
        {{ title }}
    </nuxt-link>
</template>