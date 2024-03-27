<script setup lang="ts">
import axios from 'axios';

const loading = ref(true)
const product = ref()

const props = defineProps({
    id: Number
});

onMounted(async () => {
    await axios.get(`https://fakestoreapi.com/products/${props.id}`)
    .then((response) => {
      product.value = response.data;
      loading.value = false;
    })
    .catch((error) => {
        console.error('Erro ao buscar dados:', error);
    })
});
</script>
<template>
    <div v-if="product" class="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
        <div class="w-full h-64 lg:h-96 bg-white">
            <nuxt-img :src="product?.image" :alt="product.title" fit="contain" width="296px" height="320px" loading="lazy" />
        </div>
        <div class="flex flex-col w-full gap-3">
            <div class="flex flex-col gap-3">
                <nav aria-label="Breadcrumb">
                    <ol role="list" class="mx-auto flex w-full max-w-2xl items-center space-x-2">
                        <li>
                            <div class="flex items-center">
                                <nuxt-link to="/category/" class="mr-2 capitalize text-sm font-medium text-blue-400 truncate">
                                    {{ product?.category }}
                                </nuxt-link>
                            </div>
                        </li>
                        <li class="flex w-full max-w-sm text-sm">
                            <span aria-current="page" class="font-medium text-gray-400 truncate">
                                {{ product?.title }}
                            </span>
                        </li>
                    </ol>
                </nav>
                <h3 class="text-white uppercase text-2xl">
                    {{ product?.title }}
                </h3>
                <span class="text-3xl text-blue-500 font-semibold">
                    U$ {{ product?.price }}
                </span>
            </div>
            <p class="p-4 text-white bg-slate-700 rounded-lg">
                {{ product?.description }}
            </p>
            <div class="flex items-center">
              <button type="button" class="flex items-center justify-center px-8 py-3 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 gap-3">
                Adicionar ao Carrinho
              </button>
            </div>
        </div>
    </div>
</template>