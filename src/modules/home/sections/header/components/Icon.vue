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
    <div class="w-10 z-100 h-10 bg-main flex items-center justify-center rounded-full border-2 relative" @mouseleave="onMouseLeave" @mouseover="onMouseOver">
        <img :src="img" class="w-7">
        <span v-if="isHover" class="absolute top-12 px-2 border -right-5 rounded bg-main/20 flex justify-center items-center w-max pointer-events-none">
            <p class="w-max" v-text="hover"></p>
        </span>
    </div>
</template>