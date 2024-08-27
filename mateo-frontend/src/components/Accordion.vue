<template>
    <div class="accordion__container">
        <div v-for="(item, index) in data" :key="index" class="accordion__item">
            <div :class="['accordion__header', { '--active': openIndex === index }]" @click="toggle(index)">
                <span :class="['accordion__title', { '--active': openIndex === index }]">{{ item.title }}</span>
                <span class="accordion__icon">
                    {{ openIndex === index ? '-' : '+' }}
                </span>
            </div>
            <transition name="fade">
                <div :class="['accordion__content', { '--active': openIndex === index }]" v-html="item.content"></div>
            </transition>
        </div>
    </div>
</template>

<script>
import dataList from '../../../data.json';

export default {
    name: 'Accordion',
    data() {
        return {
            openIndex: 0,
            data: dataList
        };
    },
    methods: {
        toggle(index) {
            this.openIndex = this.openIndex === index ? null : index;
        }
    }
};
</script>
