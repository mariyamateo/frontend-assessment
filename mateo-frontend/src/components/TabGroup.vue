<template>
    <div class="tab__container">
        <div class="tab">
            <button class="tab__button" v-for="(tab, index) in tabs" :key="index"
                :class="{ '--active': index === activeTab }" @click="activeTab = index">
                {{ tab.title }}
            </button>
        </div>
        <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="tab__content" v-html="tabs[activeTab].content" key="tab__content">
            </div>
        </transition>
    </div>
</template>

<script>
import dataList from '../../../data.json';

export default {
    name: 'Tab',
    data() {
        return {
            activeTab: 0,
            tabs: dataList
        };
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
        },
        enter(el, done) {
            el.offsetHeight;
            el.style.transition = 'opacity 0.5s ease';
            el.style.opacity = 1;
            done();
        },
        leave(el, done) {
            el.style.transition = 'opacity 0.5s ease';
            el.style.opacity = 0;
            done();
        }
    }
};
</script>