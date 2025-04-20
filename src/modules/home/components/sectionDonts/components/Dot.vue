<script setup lang="ts">
import { ref, watch } from 'vue';
const dot = ref<boolean>(false);
const check = () => {
    dot.value = !dot.value;
}

watch(dot, ()=>{

    console.log(dot.value)
})
</script>

<template>
    <label @click="check" class="w-4 h-4 rounded-full border flex justify-center items-center">
        <span :class="{'hidden': !dot, 'w-full h-full bg-black rounded-full': true}"></span>
    </label>
</template>