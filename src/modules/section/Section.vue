<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import useStore from '@/store';
const store = useStore();

const sectionEl = ref<HTMLElement | null>(null);
const isVisible = ref<boolean>(false);


let observer: IntersectionObserver;
// Create an IntersectionObserver instance
onMounted(()=>{
    observer = new IntersectionObserver(([entry])=>{
        isVisible.value = entry.isIntersecting;
    });

    if(sectionEl.value) {
        store.pushSection(sectionEl.value.id); // Add section to store
        observer.observe(sectionEl.value); // Observe the section element
    }
})

// Cleanup the observer
onUnmounted(()=>{
    if(sectionEl.value) {
        store.popSection(sectionEl.value.id); // Remove section from store
        observer.unobserve(sectionEl.value);
    }
})

const emits = defineEmits<{
    (e: 'visible', isVisible: boolean): void;
}>()

watch(isVisible, (newValue) => {
    emits('visible', newValue);
    if(sectionEl.value) {
        if(newValue) {
            store.addVisible()
        } else {
            store.minusVisible()
        }
    }
});

watch(() => store.sectionVisible, (newValue) => {
    if(newValue === 1 && isVisible.value && sectionEl.value) {
        store.setSection(sectionEl.value.id); // Add section to store
    }
}, { immediate: true });
</script>

<template>
    <section ref="sectionEl" class="min-h-screen snap-center">
        <slot></slot>
    </section>
</template>