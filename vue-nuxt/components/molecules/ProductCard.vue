<script setup lang="ts">
defineProps({
    loading: Boolean,
    id: Number,
    title: String,
    image: String,
    category: String,
    price: String,
});
</script>
<template>
    <template v-if="loading">
        <div v-for="(_, index) in [1, 2, 3, 4]" :key="index" class="group animate-pulse relative h-fit bg-slate-700 rounded-lg overflow-hidden">
            <span class="flex w-full h-80 overflow-hidden bg-slate-500" />
            <div class="flex flex-col justify-between p-4">
                <div class="flex flex-col w-full mb-3">
                    <span class="w-56 h-4 bg-slate-500 mb-2 rounded" />
                    <span class="w-36 h-4 bg-slate-500 mb-2 rounded" />
                    <div class="flex mt-1 text-slate-500 gap-2">
                        <Icon v-for="(_, index) in [1, 2, 3, 4, 5]" :key="index" name="bi:star-fill" class="flex text-2xl text-slate-500" />
                    </div>
                    <div class="flex flex-row items-center justify-between">
                        <span class="mt-2 w-24 h-4 px-2 text-xs text-gray-300 border border-gray-500 rounded-sm" />
                    </div>
                </div>
                <span class="flex my-3 w-24 h-6 bg-blue-500 rounded" />
                <span class="flex w-full h-10 bg-indigo-600 rounded" />
            </div>
        </div>
    </template>
    <template v-else>
        <div class="group relative h-fit bg-slate-700 rounded-lg overflow-hidden">
            <nuxt-link :to="`/products/${id}`">
                <div class="aspect-h-1 aspect-w-1 w-full h-full h-80 overflow-hidden bg-white lg:aspect-none group-hover:opacity-75">
                    <nuxt-img :src="image" :alt="title" fit="contain" width="100%" height="100%" loading="lazy" />
                </div>
            </nuxt-link>
            <div class="flex flex-col justify-between p-4">
                <nuxt-link :to="`/products/${id}`">
                    <div class="flex flex-col w-full">
                        <h3 class="text-sm text-white mb-2">
                            {{ title }}
                        </h3>
                        <div class="flex flex-row items-center justify-between">
                            <p class="mt-2 px-2 text-xs text-gray-300 border border-gray-500 rounded-sm">
                                {{ category }}
                            </p>
                        </div>
                    </div>
                    <p class="flex my-3 text-2xl font-semibold text-blue-500">
                        U$ {{ price }}
                    </p>
                </nuxt-link>
                <button type="button" class="flex items-center justify-center px-8 py-3 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 gap-3">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    </template>
</template>