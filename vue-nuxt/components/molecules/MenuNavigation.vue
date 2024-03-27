<script setup lang="ts">
import useSharedData from "@/composables/useSharedData";
const { menu } = useSharedData();
</script>

<template>
    <nav class="hidden md:flex px-4 mx-auto">
        <ul class="flex font-semibold font-heading space-x-12">
            <li class="item" v-for="(item, index) in menu" :key="index">
                <atoms-nav-links v-bind="item" />
            </li>
        </ul>
    </nav>
</template>