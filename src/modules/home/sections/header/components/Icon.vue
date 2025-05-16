<script setup lang="ts">
    import { ref } from 'vue';
    const {img, hover} = defineProps<{img: string, hover?: string}>();
    const isHover = ref(false);
    const onMouseOver = ()=>{
        isHover.value = true;
    }
    const onMouseLeave = ()=> {
        isHover.value = false;
    }
</script>

<template>
    <div class="w-10 h-10 bg-main flex items-center justify-center rounded-full border-2 relative">
        <img :src="img" class="w-7" @mouseleave="onMouseLeave" @mouseover="onMouseOver">
        <span v-if="isHover" class="absolute top-12 -right-5 rounded bg-main/40 flex justify-center items-center w-80 pointer-events-none">
            <p v-text="hover"></p>
        </span>
    </div>
</template>