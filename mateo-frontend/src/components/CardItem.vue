<script setup>
import Button from './Button.vue'

defineProps({
    buttonText: String,
    image: String,
    text: String,
});
</script>

<template>
    <div class="flex flex-col">
        <img :src=image :alt="'Card Image'" class="w-full md:w-[400px] h-auto md:h-[300px] object-cover rounded-lg" />
        <div class="flex flex-col flex-1">
            <p class="text-gray-600 mb-4 flex-1">{{ text }}</p>
            <div class="mt-auto">
                <Button :buttonText="buttonText" />
            </div>
        </div>
    </div>
</template>
