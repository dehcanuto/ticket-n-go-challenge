<script setup lang="ts">
const emit = defineEmits(['click']);

defineProps({
    icon: {
        type: String,
        required: true
    },
    notified: Boolean,
});
</script>

<template>
    <button type="button" @click="() => emit('click')" class="flex items-center text-2xl hover:text-blue-400">
        <Icon :name="icon" color="white" class="flex text-2xl" />
        <span v-if="notified" class="flex absolute -mt-5 ml-4">
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
            <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500" />
        </span>
    </button>
</template>