<script setup>
import CardItem from './CardItem.vue'
</script>

<template>
    <div class="flex flex-col md:flex-row gap-8 py-4 px-4 md:px-20">
        <div v-for="(card, index) in cards" :key="index" class="card__container">
            <CardItem :buttonText="card.buttonText" :text="card.text" :image="card.image" />
        </div>
    </div>
</template>

<script>
export default {
    name: "card",
    data() {
        return {
            cards: [
                {
                    image: "https://via.placeholder.com/400x300",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    buttonText: "Read More",
                },
                {
                    image: "https://via.placeholder.com/400x300",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    buttonText: "Read More",
                },
                {
                    image: "https://via.placeholder.com/400x300",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
                    buttonText: "Read More",
                },
            ],
        };
    },
};
</script>
