<script setup lang="ts">
function handle () {
    console.log('handle action')
}
</script>

<template>
    <div class="relative flex items-center space-x-5 items-center">
        <atoms-action-links icon="bi:cart" @click="handle()" />
        <atoms-action-links icon="bi:person" @click="handle()" />
        <atoms-action-links icon="bi:list" class="xl:hidden" @click="handle()" />
    </div>
</template>