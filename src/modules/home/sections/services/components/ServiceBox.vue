<script setup lang="ts">
import { width } from '@/utils/windowSize';
const props = defineProps<{
    label: string;
}>();
</script>

<template>
    <div dir="ltr" class="relative bg-dark w-full hover:shadow-lg pr-3 service-box border-2 flex justify-between items-center max-w-[600px] shadow-black rounded-lg h-full max-h-[310px]">
        <img src="/wave1.svg" class="absolute bottom-0 w-full opacity-20">
        <div class="h-full w-full p-4">
            <div class="flex flex-row sm:flex-col justify-between gap-2 h-full">
                <div class="w-full flex flex-col items-start">
                    <p v-for="(txt, index) in props.label.split(',')" :key="index" class="rounded-sm font-medium text-dark bg-main font-mono px-1 md:text-2xl sm:text-lg text-sm" v-text="txt"></p>
                </div>
                <div class="flex items-center gap-2 cursor-pointer">
                    <img src="/icons/arrow-white.svg">
                    <p class="text-white">مطالعه بیشتر</p>
                </div>
            </div>
        </div>
         <p v-if="width > 1100" class="w-full text-justify text-white">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
    </div>
</template>

<style scoped>
.service-box {
    box-shadow: 0 3px 0px #191A23;
}
</style>