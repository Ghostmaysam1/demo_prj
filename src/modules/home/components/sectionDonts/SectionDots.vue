<script setup lang="ts">
import Dot from './components/Dot.vue';
import useStore from '@/store';

const store = useStore();

</script>

<template>
    <div class="fixed bottom-1/2 left-2 transform translate-y-1/2 flex flex-col gap-2 z-10">
        <Dot
            v-for="(section) in store.sections"
            :key="section"
            :section="section"
        />
    </div>
</template>