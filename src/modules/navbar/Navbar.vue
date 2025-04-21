<script setup lang="ts">
import {isMobile} from '@/utils/windowSize'

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
    <nav class="px-3 col-span-10 h-[68px] flex justify-between items-center">
        <div class="flex font-bold items-center md:text-2xl text-xl gap-2"><img src="@pics/logo.svg" alt="Logo"> برج فناوری </div>


        <div v-if="!isMobile" class="">
            <ul class="flex text-black/70 font-bold items-center gap-5 justify-around">
                <li @click="()=> scrollToEl('#header')" class="cursor-pointer hover:text-black/100 transition-all transition-300">اصلی</li>
                <li @click="()=> scrollToEl('#section2')" class="cursor-pointer hover:text-black/100 transition-all transition-300">خدمات</li>
                <li @click="()=> scrollToEl('#section3')" class="cursor-pointer hover:text-black/100 transition-all transition-300">درباره ما</li>
                <li @click="()=> scrollToEl('#section4')" class="cursor-pointer hover:text-black/100 transition-all transition-300">کارکنان</li>
                <li @click="()=> scrollToEl('#section5')" class="cursor-pointer hover:text-black/100 transition-all transition-300">نظرات</li>
                <li @click="()=> scrollToEl('#section6')" class="cursor-pointer hover:text-black/100 transition-all transition-300">ارتباطات</li>
            </ul>
        </div>
        <div v-else>
            <img  src="@pics/icons/menu.svg" alt="Menu" class="w-7 cursor-pointer">
        </div>
    </nav>
</template>