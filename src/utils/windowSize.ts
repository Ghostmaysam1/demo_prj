import { useWindowSize } from '@vueuse/core';
import {computed} from 'vue'

export const { width, height } = useWindowSize();
export const isMobile = computed(() => {
    return width.value < 768;
});