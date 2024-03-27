<script setup lang="ts">
import axios from 'axios';

const loading = ref(true)
const products = ref();

const props = defineProps({
    title: String,
    url: {
        type: String,
        required: true
    },
    limit: Number,
    notMore: Boolean,
});

onMounted(async () => {
    await axios.get(`https://fakestoreapi.com/products/${props.url}`, { params: { limit: props.limit } })
    .then((response) => {
        products.value = response.data;
        loading.value = false;
    })
    .catch((error) => {
        console.error('Erro ao buscar dados:', error);
    })
});
</script>

<template>
    <section class="flex flex-col w-full p-4 gap-4">
        <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold tracking-tight text-white">
                {{ title }}
            </h2>
            <nuxt-link v-if="notMore" :to="url" class="text-blue-500">
                Ver Mais
            </nuxt-link>
        </div>
        <div class="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            <molecules-product-card 
                v-for="(item, index) in products"
                :key="index" 
                v-bind="item"
                :loading="loading"
            />
        </div>
    </section>
</template>