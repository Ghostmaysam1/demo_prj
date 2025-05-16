<script setup lang="ts">
const {label, content} = defineProps<{
    label: string;
    content: string;
}>();
</script>

<template>
    <div dir="ltr" class="relative bg-dark w-full overflow-hidden hover:shadow-lg transition-all duration-300 scale-95 md:hover:scale-115 hover:scale-3d p-3 service-box border-2 flex flex-col gap-4 justify-between items-center max-w-[400px] shadow-black rounded-sm min-h-[290px] h-fit">
        <img src="/wave1.svg" class="absolute bottom-0 w-full opacity-20">
        <div class="flex gap-2 flex-col w-full items-end">
            <p v-for="(txt, index) in label.split(',')" :key="index" class="rounded-sm font-medium text-dark bg-main font-mono w-fit px-1 md:text-2xl text-lg" v-text="txt"></p>
        </div>
        <div class="w-full h-full rounded-md relative flex justify-center items-center">
            <p class="text-right text-light" dir="rtl">{{ content }}</p>
        </div>
    </div>
</template>

<style scoped>
.service-box {
    box-shadow: 0 3px 0px #191A23;
}
</style>