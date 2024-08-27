<script setup>
defineProps({
    buttonText: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <button
        class="bg-transparent text-black px-4 py-2 rounded-full border-2 border-solid border-black uppercase font-bold">
        {{ buttonText }}
    </button>
</template>