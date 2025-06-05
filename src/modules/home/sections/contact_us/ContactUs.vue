<script setup lang="ts">
import { width } from '@/utils/windowSize';
import CWL from './components/CWL.vue'

let communicationWays: {name: string, icon: `/icons/${string}.svg`, content: string}[][] = [
    [{
        name: 'ایمیل',
        icon: '/icons/email.svg',
        content: 'AmirAsadi@gmail.com'
    },
    {
        name: 'آدرس',
        icon: '/icons/marker.svg',
        content: 'AmirAsadi@gmail.com'
    },
    {
        name: 'تلفن',
        icon: '/icons/phone.svg',
        content: 'AmirAsadi@gmail.com'
    },
    {
        name: 'گیتهاب',
        icon: '/icons/github.svg',
        content: 'AmirAsadi@gmail.com'
    }],
    [{
        name: 'تلگرام',
        icon: '/icons/telegram.svg',
        content: 'AmirAsadi@gmail.com'
    },
    {
        name: 'واتساپ',
        icon: '/icons/whatsapp.svg',
        content: 'AmirAsadi@gmail.com'
    },
    {
        name: 'لینکدین',
        icon: '/icons/linkedin.svg',
        content: 'AmirAsadi@gmail.com'
    },
    {
        name: 'فیسبوک',
        icon: '/icons/facebook.svg',
        content: 'AmirAsadi@gmail.com'
    }]
]
</script>

<template>
  <div class="h-screen flex gap-7 flex-col items-center md:px-10 px-2 md:pt-20 sm:pt-16 py-10">
    <div class="flex items-center justify-start w-full gap-3">
        <span class="w-30 h-1 bg-main block"></span> 
        <p>گفت‌و‌گوی ما اولین قدم برای رشد و موفقیت برندت میشه</p>
    </div>

    <div class="bg-[#F3F3F3] w-[98%] md:w-fit h-full gap-2.5 rounded-4xl flex flex-col border border-dark/30 shadow-md">
        <div class="w-full mt-15 h-14 bg-main/90 flex flex-row-reverse justify-center items-center">
            <img src="/logo-dark.svg" class="h-[140%] opacity-95">
            <div class="flex flex-col font-mono leading-6 font-medium text-2xl">
                <p>Amir</p>
                <p>Asadi</p>
            </div>
        </div>
        <div class="flex flex-row-reverse justify-center items-center sm:gap-20 md:gap-30 md:px-24 gap-10 px-5 sm:px-10 w-full h-full">
            <template v-if="width > 487">
                <CWL :communication-ways="communicationWays[0]" />
                <CWL :communication-ways="communicationWays[1]" />
            </template>
            <CWL v-else :communication-ways="[...communicationWays[0], ...communicationWays[1]]" />
        </div>
    </div>
  </div>
</template>
