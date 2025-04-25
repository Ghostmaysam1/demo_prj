<script setup lang="ts">
import { width } from '@/utils/windowSize';
const props = defineProps<{
    label: string;
    color: "white" | "green" | "dark";
    icon: string;
}>();

enum Color {
    white = "#F3F3F3",
    green = "#B9FF66",
    dark = "#191A23"
}

enum Highlight {
    white = Color.dark,
    green = Color.white,
    dark = "#F4CA39"
}

enum TextColor {
    white = "#F4CA39",
    green = Color.dark,
    dark = Color.dark
}
</script>

<template>
    <div :style="{background: Color[props.color]}" dir="ltr" class="relative w-full hover:shadow-lg service-box border-2 flex justify-between items-center max-w-[600px] shadow-black rounded-lg h-full max-h-[310px]">
        <img src="/wave1.svg" class="absolute bottom-0 w-full opacity-20">
        <div class="h-full w-full p-4">
            <div class="flex flex-row sm:flex-col justify-between gap-2 h-full">
                <div class="w-full flex flex-col items-start">
                    <p v-for="(txt, index) in props.label.split(',')" :key="index" :style="{background: Highlight[props.color], color: TextColor[props.color]}" class="rounded-sm font-medium font-mono px-1 md:text-2xl sm:text-lg text-sm">{{ txt }}</p>
                </div>
                <div class="flex items-center gap-2 cursor-pointer">
                    <img v-if="props.color == 'green'" src="/icons/arrow-white.svg">
                    <img v-else src="/icons/arrow-green.svg">
                    <p :style="{color: props.color == 'dark' ? Color.white : Color.dark}">مطالعه بیشتر</p>
                </div>
            </div>
        </div>
        <!-- <img  :src="props.icon" alt="icon" class="h-[100px]"> -->
         <p v-if="width > 1100" class="w-full" :style="{color: props.color == 'dark' ? 'white' : 'black'}">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
    </div>
</template>

<style scoped>
.service-box {
    box-shadow: 0 3px 0px #191A23;
}
</style>