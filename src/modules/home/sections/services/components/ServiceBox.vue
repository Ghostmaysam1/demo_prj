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
    white = Color.green,
    green = Color.white,
    dark = Color.white
}

enum TextColor {
    white = Color.dark,
    green = Color.dark,
    dark = Color.dark
}
</script>

<template>
    <div :style="{background: Color[props.color]}" dir="ltr" class="w-full hover:shadow-lg service-box p-4 border flex justify-between items-center max-w-[600px] shadow-black rounded-[40px] h-full max-h-[310px]">
        <div class="h-full w-full">
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
        <img v-if="width > 1100" :src="props.icon" alt="icon" class="h-[100px]">
    </div>
</template>

<style scoped>
.service-box {
    box-shadow: 0 3px 0px #191A23;
}
</style>