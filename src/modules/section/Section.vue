<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';

const sectionEl = ref<HTMLElement | null>(null);
const isVisible = ref<boolean>(false);

let observer: IntersectionObserver;

onMounted(()=>{
    observer = new IntersectionObserver(([entry])=>{
        isVisible.value = entry.isIntersecting;
    });

    if(sectionEl.value) {
        observer.observe(sectionEl.value);
    }
})

onUnmounted(()=>{
    if(sectionEl.value) {
        observer.unobserve(sectionEl.value);
    }
})

const emits = defineEmits<{
    (e: 'visible', isVisible: boolean): void;
}>()

watch(isVisible, (newValue) => {
    emits('visible', newValue);
});
</script>

<template>
    <section ref="sectionEl" class="h-screen snap-center">
        <slot></slot>
    </section>
</template>