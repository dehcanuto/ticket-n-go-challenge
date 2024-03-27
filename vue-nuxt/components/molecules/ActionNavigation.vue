<script setup lang="ts">
function teste () {
    console.log('deu bom')
}
</script>

<template>
    <div class="relative flex items-center space-x-5 items-center">
        <atoms-action-links icon="bi:cart" @click="teste()" />
        <atoms-action-links icon="bi:person" @click="teste()" />
        <atoms-action-links icon="bi:list" class="xl:hidden" @click="teste()" />
    </div>
</template>