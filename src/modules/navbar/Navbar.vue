<script setup lang="ts">
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
const isMobile = computed(() => {
    return width.value < 768;
});

function scrollToEl(el: string) {
    let element = document.querySelector(el);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }
}
</script>

<template>
    <nav class="px-3 fixed z-10 w-full top-0 py-2 flex justify-between items-center bg-blue-400/5 border-b border-blue-300/40 backdrop-blur-sm">
        <div class="flex z-10 font-bold items-center gap-2"><img src="@pics/logo.svg" alt="Logo"> نام شرکت</div>


        <div v-if="!isMobile" class="absolute left-1/2 transform -translate-x-1/2 z-0">
            <ul class="flex text-black/70 font-bold items-center gap-5 justify-around">
                <li @click="()=> scrollToEl('#header')" class="cursor-pointer hover:text-black/100 transition-all transition-300">اصلی</li>
                <li @click="()=> scrollToEl('#section2')" class="cursor-pointer hover:text-black/100 transition-all transition-300">خدمات</li>
                <li @click="()=> scrollToEl('#section3')" class="cursor-pointer hover:text-black/100 transition-all transition-300">درباره ما</li>
                <li @click="()=> scrollToEl('#section4')" class="cursor-pointer hover:text-black/100 transition-all transition-300">کارکنان</li>
                <li @click="()=> scrollToEl('#section5')" class="cursor-pointer hover:text-black/100 transition-all transition-300">نظرات</li>
                <li @click="()=> scrollToEl('#section6')" class="cursor-pointer hover:text-black/100 transition-all transition-300">ارتباطات</li>
            </ul>
        </div>
        <div v-else class="z-10">
            <img  src="@pics/icons/menu.svg" alt="Menu" class="w-7 cursor-pointer">
        </div>
    </nav>
</template>