<template>
    <!-- Div wrapper with the background image -->
    <div class="relative h-[600px] md:h-[650px] bg-cover bg-center mb-10 background-image">
        <!-- Text Content -->
        <div class="relative z-10 flex items-center justify-center h-full">
            <div class="text-center text-white px-4">
                <h1 class="text-5xl md:text-6xl font-bold">Hello Developer</h1>
                <h2 class="text-2xl md:text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background-image {
    background-image: url("https://via.placeholder.com/600x600");
}

@media (min-width: 640px) {
    .background-image {
        background-image: url("https://via.placeholder.com/1920x650");
    }
}
</style>