<script setup lang="ts">
import { ref, watch } from 'vue';
import useStore from '@/store';
const store = useStore();
const dot = ref<boolean>(false);


const check = () => {
    if(!dot.value) {
        document.querySelector(`#${props.section}`)?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }

}


const props = defineProps<{
    section: string;
}>();

watch(() => store.section, (newValue) => {
    if (newValue === props.section) {
        dot.value = true;
    } else {
        dot.value = false;
    }
}, { immediate: true });
</script>

<template>
    <label @click="check" class="w-4 h-4 rounded-full border flex justify-center items-center">
        <span :class="{'hidden': !dot, 'w-full h-full bg-black rounded-full': true}"></span>
    </label>
</template>