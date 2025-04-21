<script setup lang="ts">
import {ref} from 'vue';
const {question, answer, index} = defineProps<{
    question: string;
    answer: string;
    index: number;
}>()

const isOpen = ref(index % 2 === 0);

const toggleAccordion = () => {
    isOpen.value = !isOpen.value;
};

const number = ref(index + 1 < 10 ? '0'+(index + 1) : index + 1);
</script>

<template>
    <div :style="{background: isOpen ? '#B9FF66': '#F3F3F3'}" class="accordion flex w-full flex-col px-10 py-10 rounded-4xl border" dir="ltr">
        <div @click="toggleAccordion" class="flex justify-between items-center cursor-pointer">
            <p class="font-mono text-xl flex items-center gap-4 font-medium"><span class="text-4xl">{{ number }}</span> {{ question }}</p>
            <img v-if="isOpen" src="@pics/icons/minus.svg" alt="">
            <img v-else src="@pics/icons/plus.svg" alt="">
        </div>
        <br v-if="isOpen">
        <hr v-if="isOpen">
        <br v-if="isOpen">
        <div dir="rtl" :style="{'height': isOpen ? 'auto' : '0'}" class="overflow-hidden">{{ answer }}</div>
    </div>
</template>

<style>
.accordion {
    box-shadow: 0 3px 0px #191A23;
}
</style>